<?php
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Network\Exception\ForbiddenException;
use Cake\Network\Exception\NotFoundException;
use Cake\View\Exception\MissingTemplateException;
use Cake\ORM\TableRegistry;

class CourseController extends AppController
{
    private $_khoahocTbl;
    private $_tacgiaTbl;
    private $_veTbl;

    public function initialize()
    {
        parent::initialize();
        $this->_khoahocTbl = TableRegistry::get('Khoahoc');
        $this->_tacgiaTbl = TableRegistry::get('Tacgia');
        $this->_veTbl = TableRegistry::get('Ve');
    }

    public function index($type)
    {
        $khoahocBestSellers = $this->_khoahocTbl->getKhoahocMuaNhieuNhat($type, LIMIT_COURSE_EACHPAGE);
        $khoahocBestSellersFullData = [];
        foreach($khoahocBestSellers as $khoahoc) {
            $khoahocBestSellersFullData[] = $this->_prepareKhoahocData($khoahoc);
        }

        $khoahocQuantamnhat = $this->_khoahocTbl->getKhoahocLuotXemNhieuNhat($type, LIMIT_COURSE_EACHPAGE);
        $khoahocQuantamnhatFullData = [];
        foreach($khoahocQuantamnhat as $khoahoc) {
            $khoahocQuantamnhatFullData[] = $this->_prepareKhoahocData($khoahoc);
        }

        $khoahocMoinhat = $this->_khoahocTbl->getKhoahocMoiNhat($type, LIMIT_COURSE_EACHPAGE);
        $khoahocMoinhatFullData = [];
        foreach($khoahocMoinhat as $khoahoc) {
            $khoahocMoinhatFullData[] = $this->_prepareKhoahocData($khoahoc);
        }

        $this->set('khoahocMuaNhieuNhat', $khoahocBestSellersFullData);
        $this->set('khoahocQuantamNhat', $khoahocQuantamnhatFullData);
        $this->set('khoahocMoinhat', $khoahocMoinhatFullData);
    }

    public function detail()
    {

    }

    private function _prepareKhoahocData($khoahoc) {
        $minPriceVe = $this->_veTbl->findByKhoahocId($khoahoc->id)->order(['gia_thuong' => 'ASC'])->limit(1)->first();
        $khoahoc->gia = ($minPriceVe) ? gia_daydu($minPriceVe->gia_thuong) : 0;
        $tacgiaIdArr = explode(',', $khoahoc->tacgia);

        $tacgia =  $this->_tacgiaTbl->find('all',[
            'conditions' => [
                'Tacgia.id IN' => $tacgiaIdArr,
            ],
            'order' => array('FIELD(Tacgia.id, '.$khoahoc->tacgia.')')
        ])->select(['id', 'ten', 'anh'])->first();
        $khoahoc->tacgia = $tacgia;

        return $khoahoc;
    }
}
