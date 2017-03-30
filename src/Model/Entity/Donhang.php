<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Donhang Entity
 *
 * @property int $id
 * @property int $khachhang_id
 * @property int $ve_id
 * @property int $soluong
 * @property string $note
 * @property int $trangthai
 * @property int $khoahoc_id
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $updated
 *
 * @property \App\Model\Entity\Khachhang $khachhang
 * @property \App\Model\Entity\Ve $ve
 */
class Donhang extends Entity
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
