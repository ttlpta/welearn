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

function status_donhang($status)
{
    $statusName = array(
        0 => 'Chưa gọi điện',
        1 => 'Chờ thanh toán',
        2 => 'Đã thanh toán'
    );
    
    return (isset($statusName[$status]) ? $statusName[$status] : 'Status lạ');
}

function danhxung_khachhang($danhxung)
{
    $danhxungList = array(
        0 => 'Mr',
        1 => 'Mrs',
        2 => 'Ms'
    );

    return (isset($danhxungList[$danhxung]) ? $danhxungList[$danhxung] : '');
}

function status_thamgiakhoahoc($status)
{
    $statusList = array(
        0 => 'Chưa từng tham gia',
        1 => 'Đã từng tham gia',
    );

    return (isset($statusList[$status]) ? $statusList[$status] : '');
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