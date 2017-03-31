<?php
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Network\Exception\ForbiddenException;
use Cake\Network\Exception\NotFoundException;
use Cake\View\Exception\MissingTemplateException;
use Cake\ORM\TableRegistry;

class HomeController extends AppController
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
        $this->viewBuilder()->setLayout('home');
        $khoahocMoinhats = $this->_khoahocTbl->getKhoahocMoiNhat(LIMIT_COURSE_HOMEPAGE);
        $khoahocMoinhasFullData = [];
        foreach($khoahocMoinhats as $khoahoc) {
            $khoahocMoinhasFullData[] = $this->_prepareKhoahocData($khoahoc);
        }

        $khoahocMoinhatByChunks = array_chunk($khoahocMoinhasFullData, 4);

        $this->set(compact('khoahocMoinhatByChunks'));
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
