<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Tacgia Model
 *
 * @method \App\Model\Entity\Tacgium get($primaryKey, $options = [])
 * @method \App\Model\Entity\Tacgium newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Tacgium[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Tacgium|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Tacgium patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Tacgium[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Tacgium findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class TacgiaTable extends Table
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

        $this->setTable('tacgia');
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
                'path' => DIR_UPLOAD_IMAGE_TACGIA,
                'transformer' => function (\Cake\Datasource\RepositoryInterface $table, \Cake\Datasource\EntityInterface $entity, $data, $field, $settings) {
                    $extension = pathinfo($data['name'], PATHINFO_EXTENSION);
                    $tmp = tempnam(sys_get_temp_dir(), 'upload') . '.' . $extension;
                    $size = new \Imagine\Image\Box(127, 127);
                    $imagine = new \Imagine\Gd\Imagine();
                    $imagine->open($data['tmp_name'])
                        ->resize($size)
                        ->save($tmp);
                    return [
                        $tmp => $data['name']
                    ];
                },
            ]
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
            ->requirePresence('anh', 'create')
            ->notEmpty('anh','Avatar là b?t bu?c', 'create');

        $validator
            ->allowEmpty('mieuta');

        return $validator;
    }
}
