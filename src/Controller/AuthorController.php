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
    }
}