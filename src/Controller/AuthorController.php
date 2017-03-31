<?php
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Network\Exception\ForbiddenException;
use Cake\Network\Exception\NotFoundException;
use Cake\View\Exception\MissingTemplateException;
use Cake\ORM\TableRegistry;

class AuthorController extends AppController
{
    public function initialize()
    {
        parent::initialize();
    }

    public function detail($authorId)
    {
        $tacgiaTbl = TableRegistry::get('Tacgia');
        $tacgia = $tacgiaTbl->findById($authorId)->first();

        $khoahocTbl = TableRegistry::get('Khoahoc');
        $veTbl = TableRegistry::get('Ve');
        $khoahocs = $khoahocTbl->getKhoahocByTacgiaId($authorId)->toArray();
        foreach($khoahocs as $khoahoc){
            $minPriceVe = $veTbl->findByKhoahocId($khoahoc['id'])->order(['gia_thuong' => 'ASC'])->limit(1)->first();
            $khoahoc['gia'] = ($minPriceVe) ? gia_daydu($minPriceVe->gia_thuong) : 0;
        }

        $this->set('tacgia', $tacgia);
        $this->set('khoahocs', $khoahocs);
    }
}