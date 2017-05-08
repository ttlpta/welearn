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
            $query = $this->Donhang->find('all', ['order' => ['donhang.created' => 'desc']]);
        }

        $this->paginate = [
            'contain' => ['Khachhang', 'Ve']
        ];
        $donhangs = $this->paginate($query);
        $donhangRemake = [];
        $ve = [];
        foreach($donhangs as $donhang) {
            $ve[$donhang->khachhang->id][] = array(
                'id' => $donhang->id,
                've_ten' => $donhang->ve->ten,
                'khoahoc_id' => $donhang->khoahoc_id,
                've_id' => $donhang->ve->id,
                'soluong' => $donhang->soluong,
                'trangthai' => $donhang->trangthai,
                'created' => $donhang->created
            );
        }

        $khoahocIds = [];
        foreach($donhangs as $donhang) {
            $khoahocIds[] = $donhang->khoahoc_id;
            $donhangRemake[$donhang->khachhang->id] = array(
                'id' => $donhang->khachhang->id,
                'danhxung' => $donhang->khachhang->danhxung,
                'ten' => $donhang->khachhang->ten,
                'dienthoai' => $donhang->khachhang->dienthoai,
                'email' => $donhang->khachhang->email,
                'created' => $donhang->created,
                've' => $ve[$donhang->khachhang->id],
            );
        }
        $khoahocTbl = TableRegistry::get('Khoahoc');
        $khoahocs = $khoahocTbl->find()->select(['id', 'ten'])->where(['id IN' => $khoahocIds])->toArray();

        $khoahocById = [];
        foreach($khoahocs as $khoahoc) {
            $khoahocById[$khoahoc->id] = $khoahoc->ten;
        }

        $this->set('donhang', $donhangRemake);
        $this->set('khoahocById', $khoahocById);
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
        $donhangByKhachhangIds = $this->Donhang->findByKhachhangId($donhang->khachhang->id)->contain(['Khachhang', 'Ve']);

        $khoahocIds = [];
        $tongTien = 0;
        foreach($donhangByKhachhangIds as $donhang) {
            $khoahocIds[] = $donhang->khoahoc_id;
            $tongTien += $donhang->tongtien;
            if ($this->request->is('post') && $donhang->id ) {
                $donhangEntity = $this->Donhang->get($donhang->id);
                $donhangEntity->trangthai = $this->request->getData('trangthai');
                $donhangEntity->note = $this->request->getData('note');

                if($this->Donhang->save($donhangEntity)){
                    $donhangByKhachhangIds = $this->Donhang->findByKhachhangId($donhang->khachhang->id)->contain(['Khachhang', 'Ve']);
                }
            }
        }

        $khoahocTbl = TableRegistry::get('Khoahoc');
        $khoahocs = $khoahocTbl->find()->select(['id', 'ten'])->where(['id IN' => $khoahocIds])->toArray();

        $khoahocById = [];
        foreach($khoahocs as $khoahoc) {
            $khoahocById[$khoahoc->id] = $khoahoc->ten;
        }

        $this->set('tongTien', $tongTien);
        $this->set('donhangByKhachhangIds', $donhangByKhachhangIds);
        $this->set('khoahocs', $khoahocById);
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
            if(isset($requestData['khachhang-moi']) && $requestData['khachhang-moi']) {
                $khachhangTbl = TableRegistry::get('Khachhang');
                $khachhangEntity = array(
                    'ten' => $requestData['ten'],
                    'danhxung' => $requestData['danhxung'],
                    'dienthoai' => $requestData['dienthoai'],
                    'email' => $requestData['email'],
                    'namsinh' => $requestData['namsinh'],
                    'lydobiet' => $requestData['lydobiet'],
                    'khuvuc' => $requestData['khuvuc'],
                    'datungthamgia' => $requestData['datungthamgia'],
                    'khoahoctungthamgia' => $requestData['khoahoctungthamgia'],
                    'nguoigioithieu' => $requestData['nguoigioithieu'],
                );

                $khachhang = $khachhangTbl->newEntity($khachhangEntity);
                if ($khachhangTbl->save($khachhang)) {
                    $requestData['khachhang_id'] = $khachhang->id;
                } else {
                    $this->Flash->error(__('The donhang could not be saved. Please, try again.'));
                    return $this->redirect(['action' => 'add']);
                }
            }
            $khoahocIdByVe = $this->Donhang->Ve->findById($this->request->getData('ve_id'))->select(['khoahoc_id', 'gia_thuong', 'gia_khuyenmai'])->first();
            $gia = ($khoahocIdByVe->gia_khuyenmai) ? $khoahocIdByVe->gia_khuyenmai : $khoahocIdByVe->gia_thuong;
            $requestData['khoahoc_id'] = $khoahocIdByVe->khoahoc_id;
            $requestData['tongtien'] = $gia * $requestData['soluong'];
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
                $gia = ($ve->gia_khuyenmai) ? $ve->gia_khuyenmai : $ve->gia_thuong;
                return $ve->ten.' ----  Giá: '. gia_daydu($gia);
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

    public function xls() {
        $output_type = 'D';
        $this->viewBuilder()->setLayout('xls');
        $file = 'my_spreadsheet.xlsx';
        $this->set(compact('output_type', 'file'));
    }
}
