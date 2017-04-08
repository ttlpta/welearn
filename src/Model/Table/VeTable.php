<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\I18n\Time;

/**
 * Ve Model
 *
 * @property \Cake\ORM\Association\BelongsTo $Khoahoc
 * @property \Cake\ORM\Association\HasMany $Donhang
 * @property \Cake\ORM\Association\HasMany $Giohang
 *
 * @method \App\Model\Entity\Ve get($primaryKey, $options = [])
 * @method \App\Model\Entity\Ve newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Ve[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Ve|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Ve patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Ve[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Ve findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class VeTable extends Table
{
    public static $STATUS_NGUNGBAN = 0;
    public static $STATUS_BAN = 1;
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('ve');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp',[
            'events' => [
                'Model.beforeSave' => [
                    'created' => 'new',
                    'updated' => 'always',
                ]
            ]
        ]);

        $this->belongsTo('Khoahoc', [
            'foreignKey' => 'khoahoc_id',
            'joinType' => 'INNER'
        ]);
        $this->hasMany('Donhang', [
            'foreignKey' => 've_id'
        ]);
        $this->hasMany('Giohang', [
            'foreignKey' => 've_id'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmpty('id', 'create');

        $validator
            ->requirePresence('ten', 'create')
            ->notEmpty('ten');

        $validator
            ->integer('gia_thuong')
            ->requirePresence('gia_thuong', 'create')
            ->notEmpty('gia_thuong')
            ->add('gia_thuong', 'validPositiveNumber', [
                'rule' => array($this, 'isValidPositiveNumber'),
                'message' => __('Mời giá nhập số dương'),
            ]);

        $validator
            ->integer('gia_khuyenmai')
            ->allowEmpty('gia_khuyenmai')
            ->add('gia_khuyenmai', 'validPositiveNumber', [
                'rule' => array($this, 'isValidPositiveNumber'),
                'message' => __('Mời giá khuyến mại nhập số dương'),
            ])
            ->add('gia_khuyenmai', 'validGiaKhuyenMai', [
                'rule' => array($this, 'isValidGiaKhuyenMai'),
                'message' => __('Giá khuyến mại phải bé hơn giá thường'),
            ]);

        $validator
            ->allowEmpty('quyenloi');

        $validator
            ->integer('trangthai')
            ->requirePresence('trangthai', 'create')
            ->notEmpty('trangthai');

        $validator
            ->integer('soluong')
            ->allowEmpty('soluong');

        $validator
            ->requirePresence('diadiem', 'create')
            ->notEmpty('diadiem');

        $validator
            ->dateTime('thoigian_batdau')
            ->requirePresence('thoigian_batdau', 'create')
            ->notEmpty('thoigian_batdau');

        $validator
            ->dateTime('thoigian_ketthuc')
            ->requirePresence('thoigian_ketthuc', 'create')
            ->notEmpty('thoigian_ketthuc')
            ->add('thoigian_ketthuc', 'validThoigianKetthuc', [
                'rule' => array($this, 'isValidThoigianKetthuc'),
                'message' => __('Thời gian kết thúc phải lớn thời gian bắt đầu'),
            ]);

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['khoahoc_id'], 'Khoahoc'));

        return $rules;
    }

    function isValidPositiveNumber($value, array $context)
    {
        return $value > 0;
    }

    function isValidGiaKhuyenMai($value, array $context)
    {
        if(isset($context['data']['gia_thuong']) && $context['data']['gia_thuong'] > 0)
            return $value < $context['data']['gia_thuong'];

        return false;
    }

    function isValidThoigianKetthuc($value, array $context)
    {
        $ketthuc = $value['year'].'-'.$value['month'].'-'.$value['day'].' '.$value['hour'].':'.$value['minute'];
        if(isset($context['data']['thoigian_batdau']) && $batdauArr = $context['data']['thoigian_batdau']) {
            $batdau = $batdauArr['year'].'-'.$batdauArr['month'].'-'.$batdauArr['day'].' '.$batdauArr['hour'].':'.$batdauArr['minute'];
           
            return strtotime($batdau) < strtotime($ketthuc);
        }

        return false;
    }
}
