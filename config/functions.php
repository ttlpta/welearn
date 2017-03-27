<?php
function role_quanly_str($role)
{
    $roles = array(
        1 => 'Quản lý',
        2 => 'Nhân viên'
    );
    return (isset($roles[$role]) ? $roles[$role] : 'Role lạ');
}

function status($status)
{
    return ($status) ? 'Mở' : 'Đóng';
}

function status_ban($status)
{
    return ($status) ? 'Bán' : 'Ngừng bán';
}

function random_string($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}