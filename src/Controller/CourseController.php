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
            $khoahocFullData = $this->_prepareKhoahocData($khoahoc);
            if(!$khoahocFullData)
                continue;

            $khoahocBestSellersFullData[] = $khoahocFullData;
        }

        $khoahocQuantamnhat = $this->_khoahocTbl->getKhoahocLuotXemNhieuNhat(LIMIT_COURSE_EACHPAGE);
        $khoahocQuantamnhatFullData = [];
        foreach($khoahocQuantamnhat as $khoahoc) {
            $khoahocFullData = $this->_prepareKhoahocData($khoahoc);
            if(!$khoahocFullData)
                continue;
                
            $khoahocQuantamnhatFullData[] = $khoahocFullData;
        }

        $khoahocMoinhat = $this->_khoahocTbl->getKhoahocMoiNhat(LIMIT_COURSE_EACHPAGE);
        $khoahocMoinhatFullData = [];
        foreach($khoahocMoinhat as $khoahoc) {
            $khoahocFullData = $this->_prepareKhoahocData($khoahoc);
            if(!$khoahocFullData)
                continue;

            $khoahocMoinhatFullData[] = $khoahocFullData;
        }

        $this->set('khoahocMuaNhieuNhat', $khoahocBestSellersFullData);
        $this->set('khoahocQuantamNhat', $khoahocQuantamnhatFullData);
        $this->set('khoahocMoinhat', $khoahocMoinhatFullData);
    }

    public function type($type)
    {
        $khoahocQuantamnhat = $this->_khoahocTbl->getKhoahocLuotXemNhieuNhat(LIMIT_COURSE_EACHPAGE, $type);
        $khoahocQuantamnhatFullData = [];
        foreach($khoahocQuantamnhat as $khoahoc) {
            $khoahocFullData = $this->_prepareKhoahocData($khoahoc);
            if(!$khoahocFullData)
                continue;

            $khoahocQuantamnhatFullData[] = $khoahocFullData;
        }
        $tatCaKhoahoc = $this->_khoahocTbl->findByTheloai($type);
        $priceOrder = '';
        if ($this->request->getQuery('price')) {
            $priceOrder = $this->request->getQuery('price');
            $khoahocOrderByGia = [];
            foreach($khoahocQuantamnhatFullData as $khoahoc) {
                $khoahocOrderByGia[$khoahoc->id] = $khoahoc->gia;
            }

            ($priceOrder === 'asc') ? arsort($khoahocOrderByGia) : asort($khoahocOrderByGia);

            $khoahocIdOrderByGia = [];
            foreach($khoahocOrderByGia as $id => $gia) {
                $khoahocIdOrderByGia[] = $id;
            }

            $tatCaKhoahoc->order(array('FIELD(id, '.implode(',', $khoahocIdOrderByGia).')'));

        }
        $this->paginate = [
            'limit' => LIMIT_COURSE_EACHPAGE
        ];

        $tatCaKhoahoc = $this->paginate($tatCaKhoahoc);
        $tatCaKhoahocFullData = [];
        foreach($tatCaKhoahoc as $khoahoc) {
            $khoahocFullData = $this->_prepareKhoahocData($khoahoc);
            if(!$khoahocFullData)
                continue;

            $tatCaKhoahocFullData[] = $khoahocFullData;
        }
        
        $title = ($type == KHOAHOC_TREEM) ? 'Khóa học dành cho trẻ em': 'Khóa học dành cho người lớn';
        $this->set('title', $title);
        $this->set('priceOrder', $priceOrder);
        $this->set('khoahocQuantamNhat', $khoahocQuantamnhatFullData);
        $this->set('tatCaKhoahoc', $tatCaKhoahocFullData);
    }

    public function detail($courseId)
    {
        $course = $this->_khoahocTbl->findById($courseId)->first();
        if($course) {
            $this->_khoahocTbl->tangLuotXem($courseId);
            $ves = $this->_veTbl->findByKhoahocId($courseId)->order(['gia_thuong' => 'asc'])->all();
            $veReNhat = $ves->first();
            $tacgias =  $this->_tacgiaTbl->getManyTacgiaByIdArr(explode(',', $course->tacgia));
            
            $this->set(compact('course', 'ves', 'tacgias', 'veReNhat'));
        } else {
            throw new NotFoundException(__('Not found'));
        }
        
    }

    public function addToCard()
    {
        if ($this->request->is('post')) {
            $veId = $this->request->getData('ve_id');
            $ve = $this->_veTbl->findById($veId)->first();
            $giohangCu = ($this->request->session()->check('giohang')) ? $this->request->session()->read('giohang') : [];

            if(!$ve) {
                echo json_encode(array('success' => false, 'tong_tien_khoahoc_dadat' => $giohangCu ? $giohangCu['tong_tien_khoahoc_dadat'] : 0));die;
            }

            $gia = ($ve->gia_khuyenmai) ? $ve->gia_khuyenmai : $ve->gia_thuong;
            $khoahocId = $this->request->getData('khoahoc_id');
            if($khoahoc = $this->_khoahocTbl->findById($khoahocId)->select(['id', 'ten', 'anh'])->first())
            {
                $khoahoc = $khoahoc->toArray();
                $khoahoc['gia'] = $gia;
                $khoahoc['ve_id'] = $veId;
                $khoahoc['ve_ten'] = $ve->ten;
                $giohangs = array(
                    'khoahoc' => array($khoahoc), // Cho lần đầu tiên giỏ hàng chưa có j
                    'tong_khoahoc_dadat' => 1,
                    'tong_tien_khoahoc_dadat' => $gia,
                );

                $veIdGioHangCu = [];
                if($giohangCu) {
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
                    echo json_encode(array('success' => false, 'tong_tien_khoahoc_dadat' => $giohangCu ? $giohangCu['tong_tien_khoahoc_dadat'] : 0));die;
                }
            }

            echo json_encode(array('success' => false, 'tong_tien_khoahoc_dadat' => $giohangCu ? $giohangCu['tong_tien_khoahoc_dadat'] : 0));die;
        }
    }

    public function del() {
        $this->request->session()->delete('giohang');
        die('bbbbbbbbbb~~~~~');
    }

    public function deleteFromCard()
    {
        if ($this->request->is('post')) {
            $veId = $this->request->getData('ve_id');
            $ve = $this->_veTbl->findById($veId)->first();
            $gia = (isset($ve->gia_khuyenmai)) ? $ve->gia_khuyenmai : $ve->gia_thuong;
            if($giohangCu = $this->request->session()->read('giohang')) {
                foreach($giohangCu['khoahoc'] as $key => $khoahoc) {
                    if($veId == $khoahoc['ve_id']) {
                        unset($giohangCu['khoahoc'][$key]);
                        break;
                    }
                }
                $giohangCu['tong_khoahoc_dadat'] = count($giohangCu['khoahoc']);
                $giohangCu['tong_tien_khoahoc_dadat'] = $giohangCu['tong_tien_khoahoc_dadat'] - $gia;
            }
        }
        $this->request->session()->write('giohang', $giohangCu);
        
        echo json_encode(array('success' => true));die;
    }

    private function _prepareKhoahocData($khoahoc) {
        $minPriceVe = $this->_veTbl->findByKhoahocId($khoahoc->id)->order(['gia_thuong' => 'ASC'])->limit(1)->first();
        if(!$minPriceVe)
            return false;
            
        $khoahoc->gia = ($minPriceVe) ? gia_daydu($minPriceVe->gia_thuong) : 0;
        $tacgiaIdArr = explode(',', $khoahoc->tacgia);

        $tacgia =  $this->_tacgiaTbl->getManyTacgiaByIdArr($tacgiaIdArr, true);
        $khoahoc->tacgia = $tacgia;

        return $khoahoc;
    }
}
