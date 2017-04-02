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

    public function index()
    {
        $khoahocBestSellers = $this->_khoahocTbl->getKhoahocMuaNhieuNhat(LIMIT_COURSE_EACHPAGE);
        $khoahocBestSellersFullData = [];
        foreach($khoahocBestSellers as $khoahoc) {
            $khoahocBestSellersFullData[] = $this->_prepareKhoahocData($khoahoc);
        }

        $khoahocQuantamnhat = $this->_khoahocTbl->getKhoahocLuotXemNhieuNhat(LIMIT_COURSE_EACHPAGE);
        $khoahocQuantamnhatFullData = [];
        foreach($khoahocQuantamnhat as $khoahoc) {
            $khoahocQuantamnhatFullData[] = $this->_prepareKhoahocData($khoahoc);
        }

        $khoahocMoinhat = $this->_khoahocTbl->getKhoahocMoiNhat(LIMIT_COURSE_EACHPAGE);
        $khoahocMoinhatFullData = [];
        foreach($khoahocMoinhat as $khoahoc) {
            $khoahocMoinhatFullData[] = $this->_prepareKhoahocData($khoahoc);
        }

        $this->set('khoahocMuaNhieuNhat', $khoahocBestSellersFullData);
        $this->set('khoahocQuantamNhat', $khoahocQuantamnhatFullData);
        $this->set('khoahocMoinhat', $khoahocMoinhatFullData);
    }

    public function type($type)
    {
    }

    public function detail($courseId)
    {
        $course = $this->_khoahocTbl->findById($courseId)->first();
        $veCollection = $this->_veTbl->findByKhoahocId($courseId);
        $veReNhat = $veCollection->first();
        $ves = $veCollection->all();
        
        $tacgias =  $this->_tacgiaTbl->getManyTacgiaByIdArr(explode(',', $course->tacgia));
        
        $this->set(compact('course', 'ves', 'tacgias', 'veReNhat'));
    }

    private function _prepareKhoahocData($khoahoc) {
        $minPriceVe = $this->_veTbl->findByKhoahocId($khoahoc->id)->order(['gia_thuong' => 'ASC'])->limit(1)->first();
        $khoahoc->gia = ($minPriceVe) ? gia_daydu($minPriceVe->gia_thuong) : 0;
        $tacgiaIdArr = explode(',', $khoahoc->tacgia);

        $tacgia =  $this->_tacgiaTbl->getManyTacgiaByIdArr($tacgiaIdArr, true);
        $khoahoc->tacgia = $tacgia;

        return $khoahoc;
    }
}
