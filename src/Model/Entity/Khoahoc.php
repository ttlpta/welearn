<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;
use Cake\ORM\TableRegistry;

/**
 * Khoahoc Entity
 *
 * @property int $id
 * @property string $ten
 * @property string $mieutangan
 * @property int $luotxem
 * @property string $tacgia
 * @property string $anh
 * @property string $video_youtube
 * @property int $theloai
 * @property string $noidung
 * @property bool $trangthai
 * @property \Cake\I18n\Time $created
 * @property \Cake\I18n\Time $updated
 *
 * @property \App\Model\Entity\Ve[] $ve
 */
class Khoahoc extends Entity
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
