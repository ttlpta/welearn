<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Khachhang Entity
 *
 * @property int $id
 * @property int $danhxung
 * @property string $ten
 * @property string $dienthoai
 * @property string $email
 * @property string $namsinh
 * @property string $khuvuc
 * @property string $lydobiet
 * @property int $datungthamgia
 * @property string $nguoigioithieu
 * @property string $khoahoctungthamgia
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $updated
 *
 * @property \App\Model\Entity\Donhang[] $donhang
 * @property \App\Model\Entity\Giohang[] $giohang
 */
class Khachhang extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        '*' => true,
        'id' => false
    ];
}
