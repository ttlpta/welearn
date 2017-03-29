<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link      http://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller\Admin;

use App\Controller\AppController;

/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @link http://book.cakephp.org/3.0/en/controllers.html#the-app-controller
 */
class AdminController extends AppController
{

    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading components.
     *
     * e.g. `$this->loadComponent('Security');`
     *
     * @return void
     */
    public function initialize()
    {
        parent::initialize();
        $this->loadComponent('Auth', [
            'authenticate' => [
                'Form' => [
                    'fields' => [
                        'username' => 'username',
                        'password' => 'password'
                    ],
                    'userModel' => 'Quanly'
                ]
            ],
            'loginAction' => [
                'controller' => 'Quanly',
                'action' => 'dangnhap'
            ],
            'loginRedirect' => [
                'controller' => 'Quanly',
                'action' => 'index'
            ],
            'unauthorizedRedirect' => $this->referer() // If unauthorized, return them to page they were just on
        ]);
    }

    protected function _renameImage($oldName)
    {
        return random_string().$oldName;
    }

    protected function _isImage($imageName){
        if(!$imageName)
            return false;

        $ext = substr(strtolower(strrchr($imageName, '.')), 1);

        return in_array($ext, array('jpg', 'jpeg', 'gif', 'png'));
    }

    protected function _preparedDataToSearch($data)
    {
        return array_filter($data, function($value) { return $value !== ''; });
    }
}
