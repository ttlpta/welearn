<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="quanly index large-9 medium-8 columns content">
    <h3><?= __('Danh sách quản lý') ?></h3>
    <?=$this->Html->link(
        'Thêm quản lý',
        ['prefix' => 'admin', 'controller' => 'Quanly', 'action' => 'add'])?>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('username') ?></th>
                <th scope="col"><?= $this->Paginator->sort('role') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col"><?= $this->Paginator->sort('updated') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($quanly as $quanly): ?>
            <tr>
                <td><?= $this->Number->format($quanly->id) ?></td>
                <td><?= h($quanly->username) ?></td>
                <td><?= role_quanly_str($quanly->role) ?></td>
                <td><?= h($quanly->created) ?></td>
                <td><?= h($quanly->updated) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $quanly->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $quanly->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $quanly->id], ['confirm' => __('Are you sure you want to delete # {0}?', $quanly->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(['format' => __('Trang {{page}} trong {{pages}}')]) ?></p>
    </div>
</div>
