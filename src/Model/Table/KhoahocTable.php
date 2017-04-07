<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\ORM\TableRegistry;
use Cake\Validation\Validator;
use Cake\Database\Expression\QueryExpression;

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

        $this->addBehavior('Timestamp',[
            'events' => [
                'Model.beforeSave' => [
                    'created' => 'new',
                    'updated' => 'always',
                ]
            ]
        ]);

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
            ->requirePresence('theloai', 'create')
            ->notEmpty('theloai');

        $validator
            ->requirePresence('anh', 'create')
            ->notEmpty('anh', 'Avatar là bắt buộc', 'create');

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

    public function getKhoahocMuaNhieuNhat($limit, $type = null)
    {
        $donHangTbl = TableRegistry::get('Donhang');
        $query = $donHangTbl->find()->group('khoahoc_id')->select('khoahoc_id');
        $donhangs = $query->select(['soluong' => $query->func()->sum('soluong')])->order(['soluong' => 'DESC'])->toArray();
        $khoahocIds = array();
        foreach($donhangs as $donhang) {
            $khoahocIds[] = $donhang->khoahoc_id;
        }
        $khoahocIdStr = implode(',', $khoahocIds);
        if($khoahocIds) {
            $condition = [
                'id IN' => $khoahocIds,
            ];
            if(!is_null($type)) {
                $condition = $condition + ['theloai' => $type];
            }
            $khoahocs = $this->find('all',[
                'conditions' => $condition,
                'order' => array('FIELD(id, '.$khoahocIdStr.')')
            ])->limit($limit)->toArray();

            return $khoahocs;
        }

        return false;
    }

    public function getKhoahocLuotXemNhieuNhat($limit, $type = null) {
        $khoahocs = (!is_null($type)) ? $this->findByTheloai($type)->limit($limit) : $this->find('all')->limit($limit);

        return $khoahocs;
    }

    public function getKhoahocMoiNhat($limit, $type = null) {
        $khoahocs = (!is_null($type)) ? $this->findByTheloai($type)->order(['created' => 'DESC'])->limit($limit)
            : $this->find('all')->order(['created' => 'DESC'])->limit($limit);

        return $khoahocs;
    }

    public function getKhoahocByTacgiaId($tacgiaId)
    {
        if($tacgiaId) {
            $searchTacgia = ['OR' => [['tacgia LIKE' => $tacgiaId],
                ['tacgia LIKE' =>  '%,'.$tacgiaId], ['tacgia LIKE' =>  $tacgiaId.',%'], ['tacgia LIKE' =>  '%,'.$tacgiaId.',%']]];

            return $this->find('all')->where($searchTacgia);
        }

        return false;
    }

    public function tangLuotXem($id) {
        $expression = new QueryExpression('luotxem = luotxem + 1');
        $this->updateAll([$expression], ['id' => $id]);

    }
}
