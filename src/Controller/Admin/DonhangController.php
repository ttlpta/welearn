<?php
namespace App\Controller\Admin;

use App\Controller\Admin\AdminController;
use Cake\ORM\TableRegistry;
/**
 * Donhang Controller
 *
 * @property \App\Model\Table\DonhangTable $Donhang
 */
class DonhangController extends AdminController
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
                'Khachhang.ten LIKE' =>  ($this->request->getData('ten')) ? '%'.$this->request->getData('ten').'%' : '',
                'Khachhang.email LIKE' =>  ($this->request->getData('email')) ? '%'.$this->request->getData('email').'%' : '',
                'Khachhang.dienthoai LIKE' =>  ($this->request->getData('dienthoai')) ? '%'.$this->request->getData('dienthoai').'%' : '',
                'Ve.ten LIKE' =>  ($this->request->getData('ve')) ? '%'.$this->request->getData('ve').'%' : '',
                'Donhang.trangthai' =>  $this->request->getData('trangthai')
            ];

            $query = $this->Donhang->find('all')->where($this->_preparedDataToSearch($search));
        } else {
            $query = $this->Donhang;
        }

        $this->paginate = [
            'contain' => ['Khachhang', 'Ve']
        ];
        $donhang = $this->paginate($query);
        $this->set(compact('donhang'));
        $this->set('_serialize', ['donhang']);
    }

    /**
     * View method
     *
     * @param string|null $id Donhang id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $donhang = $this->Donhang->get($id, [
            'contain' => ['Khachhang', 'Ve']
        ]);
        $khoahocTbl = TableRegistry::get('Khoahoc');
        $khoahoc = $khoahocTbl->find()->select(['id', 'ten'])->where(['id' => $donhang->ve->khoahoc_id])->first();
        $this->set('khoahoc', $khoahoc);
        $this->set('donhang', $donhang);
        $this->set('_serialize', ['donhang']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $donhang = $this->Donhang->newEntity();
        if ($this->request->is('post')) {
            $requestData = $this->request->getData();
            $khoahocIdByVe = $this->Donhang->Ve->findById($this->request->getData('ve_id'))->select('khoahoc_id')->first();
            $requestData['khoahoc_id'] = $khoahocIdByVe->khoahoc_id;
            $donhang = $this->Donhang->patchEntity($donhang, $requestData);
            if ($this->Donhang->save($donhang)) {
                $this->Flash->success(__('The donhang has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The donhang could not be saved. Please, try again.'));
        }

        $khachhang = $this->Donhang->Khachhang->find('list', [
            'keyField' => 'id',
            'valueField' => function ($khachhang) {
                return $khachhang->ten;
            }
        ]);

        $ve = $this->Donhang->Ve->find('list', [
            'keyField' => 'id',
            'valueField' => function ($ve) {
                return $ve->ten;
            }
        ]);
        $this->set(compact('donhang', 'khachhang', 've'));
        $this->set('_serialize', ['donhang']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Donhang id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $donhang = $this->Donhang->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $donhang = $this->Donhang->patchEntity($donhang, $this->request->getData());
            if ($this->Donhang->save($donhang)) {
                $this->Flash->success(__('The donhang has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The donhang could not be saved. Please, try again.'));
        }
        $khachhang = $this->Donhang->Khachhang->find('list', [
            'keyField' => 'id',
            'valueField' => function ($khachhang) {
                return $khachhang->ten;
            }
        ]);

        $ve = $this->Donhang->Ve->find('list', [
            'keyField' => 'id',
            'valueField' => function ($ve) {
                return $ve->ten;
            }
        ]);
        $this->set(compact('donhang', 'khachhang', 've'));
        $this->set('_serialize', ['donhang']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Donhang id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $donhang = $this->Donhang->get($id);
        if ($this->Donhang->delete($donhang)) {
            $this->Flash->success(__('The donhang has been deleted.'));
        } else {
            $this->Flash->error(__('The donhang could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
