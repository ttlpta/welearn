<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="donhang index large-9 medium-8 columns content">
    <h3><?= __('Donhang') ?></h3>
    <?=$this->Html->link(
        'Thêm đơn hàng',
        ['prefix' => 'admin', 'controller' => 'Donhang', 'action' => 'add'])?>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('khachhang_id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('ve_id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('soluong') ?></th>
                <th scope="col"><?= $this->Paginator->sort('note') ?></th>
                <th scope="col"><?= $this->Paginator->sort('trangthai') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col"><?= $this->Paginator->sort('updated') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($donhang as $donhang): ?>
            <tr>
                <td><?= $donhang->has('khachhang') ? $this->Html->link($donhang->khachhang->ten, ['controller' => 'Khachhang', 'action' => 'view', $donhang->khachhang->id]) : '' ?></td>
                <td><?= $donhang->has('ve') ? $this->Html->link($donhang->ve->ten, ['controller' => 'Ve', 'action' => 'view', $donhang->ve->id]) : '' ?></td>
                <td><?= $this->Number->format($donhang->soluong) ?></td>
                <td><?= h($donhang->note) ?></td>
                <td><?= status_donhang($donhang->trangthai) ?></td>
                <td><?= h($donhang->created) ?></td>
                <td><?= h($donhang->updated) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $donhang->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $donhang->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $donhang->id], ['confirm' => __('Are you sure you want to delete # {0}?', $donhang->id)]) ?>
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
        <p><?= $this->Paginator->counter(['format' => __('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')]) ?></p>
    </div>
</div>
