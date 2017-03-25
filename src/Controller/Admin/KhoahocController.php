<?php
namespace App\Controller\Admin;

use App\Controller\Admin\AdminController;
use Cake\ORM\TableRegistry;

/**
 * Khoahoc Controller
 *
 * @property \App\Model\Table\KhoahocTable $Khoahoc
 */
class KhoahocController extends AdminController
{

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {
        $khoahocWithIdTacgias = $this->paginate($this->Khoahoc);
        $khoahocWithTenTacgias = [];
        foreach($khoahocWithIdTacgias as $khoahoc){
            $tacgiaIdArr = explode(',', $khoahoc->tacgia);
            $tacgiaTable = TableRegistry::get('Tacgia');
            $tacgiaNameArr = $tacgiaTable->find('all',[
                'conditions' => [
                    'Tacgia.id IN' => $tacgiaIdArr
                ]
            ])->select(['ten'])->extract('ten')->toArray();

            $khoahoc->tacgia = implode(',', $tacgiaNameArr);

            $khoahocWithTenTacgias[] = $khoahoc;
        }

        $this->set('khoahoc', $khoahocWithTenTacgias);
    }

    /**
     * View method
     *
     * @param string|null $id Khoahoc id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $khoahoc = $this->Khoahoc->get($id, [
            'contain' => ['Ve']
        ]);

        $this->set('khoahoc', $khoahoc);
        $this->set('_serialize', ['khoahoc']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $khoahoc = $this->Khoahoc->newEntity();
        $tacgiaTable = TableRegistry::get('Tacgia');
        $tacgias = $tacgiaTable->find();
        if ($this->request->is('post')) {
            $khoahocData = $this->request->getData();
            if($khoahocData['anh']['name'] && !$this->_isImage($khoahocData['anh']['name'])){
                $this->Flash->error(__('File upload không phải ảnh'));
            } else {
                $khoahocData['anh']['name'] = $this->_renameImage($khoahocData['anh']['name']);
                $khoahocData['tacgia'] = implode(',', $khoahocData['tacgia']);
                $khoahoc = $this->Khoahoc->patchEntity($khoahoc, $khoahocData);
                if ($this->Khoahoc->save($khoahoc)) {
                    $this->Flash->success(__('The khoahoc has been saved.'));

                    return $this->redirect(['action' => 'index']);
                }
                $this->Flash->error(__('The khoahoc could not be saved. Please, try again.'));
            }
        }
        $this->set(compact('khoahoc'));
        $this->set(compact('tacgias'));
        $this->set('_serialize', ['khoahoc']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Khoahoc id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $khoahoc = $this->Khoahoc->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $khoahoc = $this->Khoahoc->patchEntity($khoahoc, $this->request->getData());
            if ($this->Khoahoc->save($khoahoc)) {
                $this->Flash->success(__('The khoahoc has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The khoahoc could not be saved. Please, try again.'));
        }
        $this->set(compact('khoahoc'));
        $this->set('_serialize', ['khoahoc']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Khoahoc id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $khoahoc = $this->Khoahoc->get($id);
        if ($this->Khoahoc->delete($khoahoc)) {
            $this->Flash->success(__('The khoahoc has been deleted.'));
        } else {
            $this->Flash->error(__('The khoahoc could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
