<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Ve Entity
 *
 * @property int $id
 * @property string $ten
 * @property int $khoahoc_id
 * @property int $gia_thuong
 * @property int $gia_khuyenmai
 * @property string $quyenloi
 * @property int $trangthai
 * @property int $soluong
 * @property string $diadiem
 * @property \Cake\I18n\Time $thoigian_batdau
 * @property \Cake\I18n\Time $thoigian_ketthuc
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $updated
 *
 * @property \App\Model\Entity\Khoahoc $khoahoc
 * @property \App\Model\Entity\Donhang[] $donhang
 * @property \App\Model\Entity\Giohang[] $giohang
 */
class Ve extends Entity
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
