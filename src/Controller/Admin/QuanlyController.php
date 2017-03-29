<?php
namespace App\Controller\Admin;

use App\Controller\Admin\AdminController;

/**
 * Quanly Controller
 *
 * @property \App\Model\Table\QuanlyTable $Quanly
 */
class QuanlyController extends AdminController
{
    public function initialize()
    {
        parent::initialize();
        $this->Auth->allow(['dangxuat']);
    }
    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {

        if ($this->request->is('post')) {
            $search = [
                'username LIKE' =>  ($this->request->getData('username')) ? '%'.$this->request->getData('username').'%' : '',
                'role' =>  $this->request->getData('role')
            ];
            $query = $this->Quanly->find('all')->where($this->_preparedDataToSearch($search));
        } else {
            $query = $this->Quanly;
        }
        $quanly = $this->paginate($query);

        $this->set(compact('quanly'));
        $this->set('_serialize', ['quanly']);
    }

    /**
     * View method
     *
     * @param string|null $id Quanly id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $quanly = $this->Quanly->get($id, [
            'contain' => []
        ]);

        $this->set('quanly', $quanly);
        $this->set('_serialize', ['quanly']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $quanly = $this->Quanly->newEntity();
        if ($this->request->is('post')) {
            $quanly = $this->Quanly->patchEntity($quanly, $this->request->getData());
            if ($this->Quanly->save($quanly)) {
                $this->Flash->success(__('The quanly has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The quanly could not be saved. Please, try again.'));
        }
        $this->set(compact('quanly'));
        $this->set('_serialize', ['quanly']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Quanly id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $quanly = $this->Quanly->get($id);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $quanly = $this->Quanly->patchEntity($quanly, $this->request->getData());
            $currentUser = $this->Auth->user();
            if($currentUser['id'] == $id &&  $currentUser['role'] != $quanly->role) {
                $this->Flash->error(__('Bạn không thể cập nhập Role của mình'));
            } else {
                if ($this->Quanly->save($quanly)) {
                    $this->Flash->success(__('Sửa thông tin thành công'));

                    return $this->redirect(['action' => 'index']);
                }
                $this->Flash->error(__('Sửa thông tin không thành công. Hãy thử lại'));
            }
        }
        $this->set(compact('quanly'));
        $this->set('_serialize', ['quanly']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Quanly id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $currentUser = $this->Auth->user();
        if ($currentUser['id'] == $id) {
            $this->Flash->error(__('Không thể xóa chính mình'));
        } else {
            $this->request->allowMethod(['post', 'delete']);
            $quanly = $this->Quanly->get($id);
            if ($this->Quanly->delete($quanly)) {
                $this->Flash->success(__('Xóa thành công'));
            } else {
                $this->Flash->error(__('Xóa không thành công'));
            }
        }


        return $this->redirect(['action' => 'index']);
    }

    public function dangnhap()
    {
        if ($this->request->is('post')) {
            $user = $this->Auth->identify();
            if ($user) {
                $this->Auth->setUser($user);
                return $this->redirect($this->Auth->redirectUrl());
            }
            $this->Flash->error('Your username or password is incorrect.');
        }
    }

    public function dangxuat()
    {
        $this->Flash->success('Bạn đã đăng xuất');
        return $this->redirect($this->Auth->logout());
    }
}
