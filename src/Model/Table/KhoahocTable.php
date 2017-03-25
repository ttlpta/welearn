<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\ORM\TableRegistry;
use Cake\Validation\Validator;

/**
 * Khoahoc Model
 *
 * @property \Cake\ORM\Association\HasMany $Ve
 *
 * @method \App\Model\Entity\Khoahoc get($primaryKey, $options = [])
 * @method \App\Model\Entity\Khoahoc newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Khoahoc[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Khoahoc|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Khoahoc patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Khoahoc[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Khoahoc findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class KhoahocTable extends Table
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

        $this->setTable('khoahoc');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');
        $this->addBehavior('Josegonzalez/Upload.Upload', [
            'anh' => [
                'path' => DIR_UPLOAD_IMAGE_KHOAHOC
            ]
        ]);

        $this->hasMany('Ve', [
            'foreignKey' => 'khoahoc_id'
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
            ->requirePresence('mieutangan', 'create')
            ->notEmpty('mieutangan');

        $validator
            ->integer('luotxem')
            ->requirePresence('luotxem', 'create')
            ->notEmpty('luotxem');

        $validator
            ->requirePresence('tacgia', 'create')
            ->notEmpty('tacgia');

        $validator
            ->requirePresence('anh', 'create')
            ->notEmpty('anh');

        $validator
            ->allowEmpty('video_youtube');

        $validator
            ->requirePresence('noidung', 'create')
            ->notEmpty('noidung');

        $validator
            ->boolean('trangthai')
            ->requirePresence('trangthai', 'create')
            ->notEmpty('trangthai');

        return $validator;
    }


    public function findWithTenTacgia(Query $query, array $options)
    {
        $khoahocWithIdTacgias = $query->find('all');
        $khoahocWithTenTacgias = [];
        foreach($khoahocWithIdTacgias as $khoahoc){
            $tacgiaIdArr = explode(',', $khoahoc->tacgia);
            $tacgiaTable = TableRegistry::get('Tacgia');
            $tacgiaNameArr = $tacgiaTable->find('all',[
                'conditions' => [
                    'Tacgia.id IN' => $tacgiaIdArr
                ]
            ])->select(['ten'])->extract('ten')->toArray();

            $khoahoc->tacgia = implode(',', $tacgiaNameArr);

            $khoahocWithTenTacgias[] = $khoahoc;
        }

        return $khoahocWithTenTacgias;
    }
}
