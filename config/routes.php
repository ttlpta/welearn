<?php
/**
 * Routes configuration
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

use Cake\Core\Plugin;
use Cake\Routing\RouteBuilder;
use Cake\Routing\Router;
use Cake\Routing\Route\DashedRoute;

Router::defaultRouteClass(DashedRoute::class);

Router::scope('/', function (RouteBuilder $routes) {
    $routes->connect('/', ['controller' => 'Home', 'action' => 'index']);
    $routes->connect('/tac-ca-khoa-hoc', ['controller' => 'Course', 'action' => 'index']);
    $routes->connect('/khoa-hoc-danh-cho-nguoi-lon', ['controller' => 'Course', 'action' => 'type', 1]);
    $routes->connect('/khoa-hoc-danh-cho-tre-em', ['controller' => 'Course', 'action' => 'type', 0]);
    $routes->connect('/khoa-hoc/them-gio-hang', ['controller' => 'Course', 'action' => 'addToCard']);
    $routes->connect('/khoa-hoc/xoa-gio-hang', ['controller' => 'Course', 'action' => 'deleteFromCard']);
    $routes->connect('/khoa-hoc/:id', ['controller' => 'Course', 'action' => 'detail'], ['id' => '\d+', 'pass' => ['id']]);
    $routes->connect('/thanh-toan', ['controller' => 'Checkout', 'action' => 'index']);
    $routes->connect('/', ['controller' => 'Home', 'action' => 'index']);
    $routes->connect('/pages/*', ['controller' => 'Pages', 'action' => 'display']);
    $routes->connect('/tacgia/:id', ['controller' => 'Author', 'action' => 'detail'], ['id' => '\d+', 'pass' => ['id']]);
    $routes->connect('/admin/*', ['prefix' => 'admin','controller' => 'Quanly', 'action' => 'index']);

    $routes->fallbacks(DashedRoute::class);

    // Admin 
    Router::prefix('admin', function ($routes) {
        $routes->fallbacks(DashedRoute::class);
    });
});

Plugin::routes();
