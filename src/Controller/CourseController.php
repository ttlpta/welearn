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
        $ves = $this->_veTbl->findByKhoahocId($courseId)->order(['gia_thuong' => 'asc'])->all();
        $veReNhat = $ves->first();
        $tacgias =  $this->_tacgiaTbl->getManyTacgiaByIdArr(explode(',', $course->tacgia));
        
        $this->set(compact('course', 'ves', 'tacgias', 'veReNhat'));
    }

    public function addToCard()
    {
        if ($this->request->is('post')) {
            $veId = $this->request->getData('ve_id');
            $ve = $this->_veTbl->findById($veId)->first();
            $gia = ($ve->gia_khuyenmai) ? $ve->gia_khuyenmai : $ve->gia_thuong;

            $khoahocId = $this->request->getData('khoahoc_id');
            $khoahoc = $this->_khoahocTbl->findById($khoahocId)->select(['id', 'ten', 'anh'])->first()->toArray();
            $khoahoc['gia'] = $gia;
            $khoahoc['ve_id'] = $veId;
            $giohangs = array(
                'khoahoc' => array($khoahoc), // Cho lần đầu tiên giỏ hàng chưa có j
                'tong_khoahoc_dadat' => 1,
                'tong_tien_khoahoc_dadat' => $gia,
            );

            $veIdGioHangCu = [];
            if($this->request->session()->check('giohang')) {
                $giohangCu = $this->request->session()->read('giohang');

                foreach($giohangCu['khoahoc'] as $khoahoc) {
                    $veIdGioHangCu[] = $khoahoc['ve_id'];
                }


                    $giohangCu['khoahoc'][] = $giohangs['khoahoc'][0];
                    $giohangs['khoahoc'] = $giohangCu['khoahoc'];
                    $giohangs['tong_khoahoc_dadat'] = count($giohangs['khoahoc']);
                    $giohangs['tong_tien_khoahoc_dadat'] = $gia + $giohangCu['tong_tien_khoahoc_dadat'];
            }

            if(!in_array($veId, $veIdGioHangCu)) {
                $this->request->session()->write('giohang', $giohangs);
                echo json_encode(array('success' => true, 'data' => $giohangs));die;
            } else {
                echo json_encode(array('success' => false, 'tong_tien_khoahoc_dadat' => (isset($giohangCu) ? $giohangCu['tong_tien_khoahoc_dadat'] : 0)));die;
            }
        }
    }

    public function deleteCard()
    {
        $this->request->session()->delete('giohang');
        die('bbbbbbbbbb~~~~~');
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
