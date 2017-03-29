<?php
namespace App\Controller\Admin;

use App\Controller\AppController;
use Cake\ORM\TableRegistry;
/**
 * Ve Controller
 *
 * @property \App\Model\Table\VeTable $Ve
 */
class VeController extends AdminController
{

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {

        if ($this->request->is('post')) {
            $search = [
                'Ve.ten LIKE' =>  ($this->request->getData('ten')) ? '%'.$this->request->getData('ten').'%' : '',
                'khoahoc_id' =>  $this->request->getData('khoahoc_id'),
                'diadiem LIKE' =>  ($this->request->getData('diadiem')) ? '%'.$this->request->getData('diadiem').'%' : '',
                'Ve.trangthai' =>  $this->request->getData('trangthai')
            ];

            $query = $this->Ve->find('all')->where($this->_preparedDataToSearch($search));
        } else {
            $query = $this->Ve;
        }

        $this->paginate = [
            'contain' => ['Khoahoc']
        ];
        $ve = $this->paginate($query);
        $khoahocs = $this->Ve->Khoahoc->find('list', [
            'keyField' => 'id',
            'valueField' => function ($khoahoc) {
                return $khoahoc->ten;
            }
        ]);
        $this->set(compact('khoahocs'));
        $this->set(compact('ve'));
        $this->set('_serialize', ['ve']);
    }

    /**
     * View method
     *
     * @param string|null $id Ve id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $ve = $this->Ve->get($id, [
            'contain' => ['Khoahoc', 'Donhang', 'Giohang']
        ]);

        $this->set('ve', $ve);
        $this->set('_serialize', ['ve']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $ve = $this->Ve->newEntity();
        if ($this->request->is('post')) {
            $ve = $this->Ve->patchEntity($ve, $this->request->getData());
            if ($this->Ve->save($ve)) {
                $this->Flash->success(__('The ve has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The ve could not be saved. Please, try again.'));
        }
        $khoahocs = $this->Ve->Khoahoc->find('list', [
            'keyField' => 'id',
            'valueField' => function ($khoahoc) {
                return $khoahoc->ten;
            }
        ]);
        $this->set(compact('ve', 'khoahocs'));
        $this->set('_serialize', ['ve']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Ve id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $ve = $this->Ve->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $ve = $this->Ve->patchEntity($ve, $this->request->getData());
            if ($this->Ve->save($ve)) {
                $this->Flash->success(__('The ve has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The ve could not be saved. Please, try again.'));
        }
        $khoahocs = $this->Ve->Khoahoc->find('list', [
            'keyField' => 'id',
            'valueField' => function ($khoahoc) {
                return $khoahoc->ten;
            }
        ]);
        $this->set(compact('ve', 'khoahocs'));
        $this->set('_serialize', ['ve']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Ve id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $ve = $this->Ve->get($id);
        if ($this->Ve->delete($ve)) {
            $this->Flash->success(__('The ve has been deleted.'));
        } else {
            $this->Flash->error(__('The ve could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
