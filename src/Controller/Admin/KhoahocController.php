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
    private $_tacgiaTbl;
    private $_donhangTbl;
    public function initialize()
    {
        parent::initialize();
        $this->_tacgiaTbl = TableRegistry::get('Tacgia');
        $this->_danhmucTbl = TableRegistry::get('Categories');
        $this->_quanlyTbl = TableRegistry::get('Quanly');
        $this->_loginUser = $this->Auth->user();
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
                'ten LIKE' =>  ($this->request->getData('ten')) ? '%'.$this->request->getData('ten').'%' : '',
                'trangthai' =>  $this->request->getData('trangthai'),
                'theloai' =>  $this->request->getData('theloai')
            ];

            if($this->request->getData('tacgia')) {
                $tacgia = implode(',', $this->request->getData('tacgia'));
                $searchTacgia = ['OR' => [['tacgia LIKE' => $tacgia], ['tacgia LIKE' =>  '%,'.$tacgia], ['tacgia LIKE' =>  $tacgia.',%'], ['tacgia LIKE' =>  '%,'.$tacgia.',%']]];
                $query = $this->Khoahoc->find('all')->where($this->_preparedDataToSearch($search + $searchTacgia));
            } else {
                $query = $this->Khoahoc->find('all')->where($this->_preparedDataToSearch($search));
            }
        } else {
            $query = $this->Khoahoc;
        }

        $this->paginate = [
            'contain' => ['Categories']
        ];
        $khoahocWithIdTacgias = $this->paginate($query);
        $khoahocWithTenTacgias = [];
        foreach($khoahocWithIdTacgias as $khoahoc){
            $cotheXoa = ($this->_loginUser['role'] == 1 || ($this->_loginUser['role'] == 2 && $this->_loginUser['id'] == $khoahoc->manager_id));
            $khoahoc->cotheXoa = $cotheXoa;
            
            $tacgiaIdArr = explode(',', $khoahoc->tacgia);
            $tacgiaNameArr =  $this->_tacgiaTbl->find('all',[
                'conditions' => [
                    'Tacgia.id IN' => $tacgiaIdArr
                ]
            ])->select(['ten'])->extract('ten')->toArray();

            $khoahoc->tacgia = implode(',', $tacgiaNameArr);

            $khoahocWithTenTacgias[] = $khoahoc;
        }
        $tacgias = $this->_getAllTacgia();
        $categories = $this->_danhmucTbl->find('treeList')->toArray();
        $this->set(compact('categories'));
        $this->set(compact('tacgias'));
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
        $donhangTbl = TableRegistry::get('Donhang'); 
        $donhangs = $donhangTbl->findAllByKhoahocId($id)->contain(['Khachhang']);
        $tacgiaIdArr = explode(',', $khoahoc->tacgia);
        $tacgiaNameArr =  $this->_tacgiaTbl->find('all',[
            'conditions' => [
                'Tacgia.id IN' => $tacgiaIdArr
            ]
        ])->select(['ten'])->extract('ten')->toArray();

        $khoahoc->tacgia = implode(',', $tacgiaNameArr);
        $this->set('khoahoc', $khoahoc);
        $this->set('donhangs', $donhangs);
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
        if($this->_loginUser['role'] != 1){
            $this->redirect(['action' => 'index']);
        }

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
        $tacgias = $this->_getAllTacgia();
        $categories = $this->_danhmucTbl->find('treeList')->toArray();
        $quanly = $this->_getAllQuanly();
        $this->set(compact('tacgias', 'khoahoc', 'categories', 'quanly'));
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
            $khoahocData = $this->request->getData();
            if($khoahocData['anh']['name'] && !$this->_isImage($khoahocData['anh']['name'])){
                $this->Flash->error(__('File upload không phải ảnh'));
            } else {
                $khoahocData['anh']['name'] = ($khoahocData['anh']['name'])?
                    $this->_renameImage($khoahocData['anh']['name']) : $khoahoc->anh;
                $khoahocData['tacgia'] = implode(',', $khoahocData['tacgia']);
                $khoahoc = $this->Khoahoc->patchEntity($khoahoc, $khoahocData);
                if ($this->Khoahoc->save($khoahoc)) {
                    $this->Flash->success(__('The khoahoc has been saved.'));

                    return $this->redirect(['action' => 'index']);
                }
                $this->Flash->error(__('The khoahoc could not be saved. Please, try again.'));
            }
        }
        $tacgias = $this->_getAllTacgia();
        $categories = $this->_danhmucTbl->find('treeList')->toArray();
        $quanly = $this->_getAllQuanly();
        $this->set(compact('categories'));
        $this->set(compact('khoahoc'));
        $this->set(compact('tacgias'));
        $this->set(compact('quanly'));
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

    private function _getAllTacgia()
    {
        return $this->_tacgiaTbl->find();
    }

    private function _getAllQuanly() 
    {
        $loginUser = $this->_loginUser;

        return $this->_quanlyTbl->find('list', [
            'keyField' => 'id',
            'valueField' => function ($quanly) use ($loginUser) {
                $option = ($quanly->id == $loginUser['id']) ? 'Chỉ mình tôi' :  $quanly->username.' ---- Role: '.role_quanly_str($quanly->role);
                return $option;
            }
        ]);
    }
}
