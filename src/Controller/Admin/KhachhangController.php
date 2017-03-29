<?php
namespace App\Controller\Admin;

use App\Controller\Admin\AdminController;

/**
 * Khachhang Controller
 *
 * @property \App\Model\Table\KhachhangTable $Khachhang
 */
class KhachhangController extends AdminController
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
                'ten LIKE' =>  ($this->request->getData('ten')) ? '%'.$this->request->getData('ten').'%' : '',
                'email LIKE' =>  ($this->request->getData('email')) ? '%'.$this->request->getData('email').'%' : '',
                'dienthoai LIKE' =>  ($this->request->getData('dienthoai')) ? '%'.$this->request->getData('dienthoai').'%' : '',
            ];

            $query = $this->Khachhang->find('all')->where($this->_preparedDataToSearch($search));
        } else {
            $query = $this->Khachhang;
        }
        $khachhang = $this->paginate($query);

        $this->set(compact('khachhang'));
        $this->set('_serialize', ['khachhang']);
    }

    /**
     * View method
     *
     * @param string|null $id Khachhang id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $khachhang = $this->Khachhang->get($id, [
            'contain' => ['Donhang', 'Giohang']
        ]);

        $this->set('khachhang', $khachhang);
        $this->set('_serialize', ['khachhang']);
    }

    

    /**
     * Delete method
     *
     * @param string|null $id Khachhang id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $khachhang = $this->Khachhang->get($id);
        if ($this->Khachhang->delete($khachhang)) {
            $this->Flash->success(__('The khachhang has been deleted.'));
        } else {
            $this->Flash->error(__('The khachhang could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
