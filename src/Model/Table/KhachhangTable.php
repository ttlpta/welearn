<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Khachhang Model
 *
 * @property \Cake\ORM\Association\HasMany $Donhang
 * @property \Cake\ORM\Association\HasMany $Giohang
 *
 * @method \App\Model\Entity\Khachhang get($primaryKey, $options = [])
 * @method \App\Model\Entity\Khachhang newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Khachhang[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Khachhang|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Khachhang patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Khachhang[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Khachhang findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class KhachhangTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('khachhang');
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

        $this->hasMany('Donhang', [
            'foreignKey' => 'khachhang_id'
        ]);
        $this->hasMany('Giohang', [
            'foreignKey' => 'khachhang_id'
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
            ->integer('danhxung')
            ->requirePresence('danhxung', 'create')
            ->notEmpty('danhxung');

        $validator
            ->requirePresence('ten', 'create')
            ->notEmpty('ten');

        $validator
            ->requirePresence('dienthoai', 'create')
            ->notEmpty('dienthoai');

        $validator
            ->email('email')
            ->requirePresence('email', 'create')
            ->notEmpty('email');

        $validator
            ->requirePresence('namsinh', 'create')
            ->notEmpty('namsinh');

        $validator
            ->requirePresence('khuvuc', 'create')
            ->notEmpty('khuvuc');

        $validator
            ->requirePresence('lydobiet', 'create')
            ->notEmpty('lydobiet');

        $validator
            ->integer('datungthamgia')
            ->requirePresence('datungthamgia', 'create')
            ->notEmpty('datungthamgia');

        $validator
            ->allowEmpty('nguoigioithieu');

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
        $rules->add($rules->isUnique(['email']));

        return $rules;
    }
}
