<?php
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Network\Exception\ForbiddenException;
use Cake\Network\Exception\NotFoundException;
use Cake\View\Exception\MissingTemplateException;
use Cake\ORM\TableRegistry;
use App\Model\Table\DonhangTable;

class CheckoutController extends AppController
{
    private $_khachhangTbl;
    private $_donhangTbl;
    public function initialize()
    {
        parent::initialize();
        $this->_khachhangTbl = TableRegistry::get('Khachhang');
        $this->_donhangTbl = TableRegistry::get('Donhang');
    }

    public function index()
    {
        if ($this->request->is('post')) {
            $requestData = $this->request->getData();
            $khachhangEntity = array(
                'ten' => $requestData['ten'],
                'danhxung' => $requestData['danhxung'],
                'dienthoai' => $requestData['dienthoai'],
                'email' => $requestData['email'],
                'namsinh' => $requestData['namsinh'],
                'khuvuc' => $requestData['khuvuc'],
                'lydobiet' => $requestData['lydobiet'],
                'datungthamgia' => $requestData['datungthamgia'],
                'nguoigioithieu' => $requestData['nguoigioithieu'],
            );

            $khachhang = $this->_khachhangTbl->newEntity($khachhangEntity);
            if ($this->_khachhangTbl->save($khachhang)) {
                $donhangs = $this->request->getData('donhang');
                $donhangEntities = [];
                foreach($donhangs as $donhang) {
                    if(!$donhang['soluong'])
                        continue;

                    $donhangEntities[] = array(
                        'khachhang_id' => $khachhang->id,
                        've_id' => $donhang['ve_id'],
                        'soluong' => $donhang['soluong'],
                        'trangthai' => DonhangTable::$STATUS_CHUAGOIDIEN,
                        'khoahoc_id' => $donhang['khoahoc_id'],
                        'tongtien' => $donhang['gia'] * $donhang['soluong'],
                    );
                }

                if($donhangEntities) {
                    $donhangEntities = $this->_donhangTbl->newEntities($donhangEntities);
                    if ($this->_donhangTbl->saveMany($donhangEntities)) {
                        $this->request->session()->delete('giohang');
                        return $this->redirect('thanh-toan-thanh-cong');
                    }
                }
            }
        }

        $giohang = ($this->request->session()->read('giohang')) ? $this->request->session()->read('giohang') : [];
        $this->set(compact('giohang'));
    }

    public function success()
    {

    }
}