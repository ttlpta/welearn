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

    public function initialize()
    {
        parent::initialize();
        $this->_khoahocTbl = TableRegistry::get('Khoahoc');
    }

    public function index($type)
    {
        $khoahocs = $this->_khoahocTbl->findByTheloai($type);
        
        $this->set(compact('khoahocs'));
    }

    public function detail()
    {
        
    }
}
