<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Donhang Model
 *
 * @property \Cake\ORM\Association\BelongsTo $Khachhang
 * @property \Cake\ORM\Association\BelongsTo $Ve
 *
 * @method \App\Model\Entity\Donhang get($primaryKey, $options = [])
 * @method \App\Model\Entity\Donhang newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Donhang[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Donhang|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Donhang patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Donhang[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Donhang findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class DonhangTable extends Table
{

    public static $STATUS_CHUAGOIDIEN = 0;
    public static $STATUS_CHOTHANHTOAN = 1;
    public static $STATUS_DATHANHTOAN = 2;
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('donhang');
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

        $this->belongsTo('Khachhang', [
            'foreignKey' => 'khachhang_id',
            'joinType' => 'INNER'
        ]);
        $this->belongsTo('Ve', [
            'foreignKey' => 've_id',
            'joinType' => 'INNER'
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
            ->integer('khachhang_id')
            ->requirePresence('khachhang_id', 'create')
            ->notEmpty('khachhang_id');

        $validator
            ->integer('ve_id')
            ->requirePresence('ve_id', 'create')
            ->notEmpty('ve_id');

        $validator
            ->integer('soluong')
            ->requirePresence('soluong', 'create')
            ->notEmpty('soluong')
            ->add('soluong', 'validPositiveNumber', [
                'rule' => array($this, 'isValidPositiveNumber'),
                'message' => __('Số lượng là số dương'),
            ]);

        $validator
            ->allowEmpty('note');

        $validator
            ->integer('trangthai')
            ->requirePresence('trangthai', 'create')
            ->notEmpty('trangthai');

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
        $rules->add($rules->existsIn(['khachhang_id'], 'Khachhang'));
        $rules->add($rules->existsIn(['ve_id'], 'Ve'));

        return $rules;
    }

    function isValidPositiveNumber($value, array $context)
    {
        return $value > 0;
    }

}
