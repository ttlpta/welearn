<?php
namespace App\Controller\Admin;

use App\Controller\Admin\AdminController;

/**
 * Tacgia Controller
 *
 * @property \App\Model\Table\TacgiaTable $Tacgia
 */
class TacgiaController extends AdminController
{

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {

        if ($this->request->is('post')) {
            $search =[
                'ten LIKE' =>  ($this->request->getData('ten')) ? '%'.$this->request->getData('ten').'%' : '',
            ];
            $query = $this->Tacgia->find('all')->where($this->_preparedDataToSearch($search));
        } else {
            $query = $this->Tacgia;
        }
        $tacgia = $this->paginate($query);
        $this->set(compact('tacgia'));
        $this->set('_serialize', ['tacgia']);
    }

    /**
     * View method
     *
     * @param string|null $id Tacgium id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $tacgium = $this->Tacgia->get($id, [
            'contain' => []
        ]);

        $this->set('tacgium', $tacgium);
        $this->set('_serialize', ['tacgium']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $tacgium = $this->Tacgia->newEntity();
        if ($this->request->is('post')) {
            $tacgiaData = $this->request->getData();
            if(!$this->_isImage($tacgiaData['anh']['name'])){
                $this->Flash->error(__('File upload không phải ảnh'));
            } else {
                $tacgiaData['anh']['name'] = $this->_renameImage($tacgiaData['anh']['name']);
                $tacgium = $this->Tacgia->patchEntity($tacgium, $tacgiaData);
                if ($this->Tacgia->save($tacgium)) {
                    $this->Flash->success(__('Thêm tác giả thành công'));

                    return $this->redirect(['action' => 'index']);
                }

                $this->Flash->error(__('Thêm tác giả không thành công'));
            }
        }
        $this->set(compact('tacgium'));
        $this->set('_serialize', ['tacgium']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Tacgium id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $tacgium = $this->Tacgia->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $tacgiaData = $this->request->getData();
            if($tacgiaData['anh']['name'] && !$this->_isImage($tacgiaData['anh']['name'])){
                $this->Flash->error(__('File upload không phải ảnh'));
            } else {
                $tacgiaData['anh']['name'] = $this->_renameImage($tacgiaData['anh']['name']);
                $tacgium = $this->Tacgia->patchEntity($tacgium, $tacgiaData);
                if ($this->Tacgia->save($tacgium)) {
                    $this->Flash->success(__('Sửa tác giả thành công'));

                    return $this->redirect(['action' => 'index']);
                }
                $this->Flash->error(__('Sửa tác giả thất bại'));
            }
        }
        $this->set(compact('tacgium'));
        $this->set('_serialize', ['tacgium']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Tacgium id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $tacgium = $this->Tacgia->get($id);
        if ($this->Tacgia->delete($tacgium)) {
            $this->Flash->success(__('Xóa tác giả thành công'));
        } else {
            $this->Flash->error(__('Xóa tác giả thất bại'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
