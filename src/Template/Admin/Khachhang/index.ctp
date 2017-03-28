<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khachhang index large-9 medium-8 columns content">
    <h3><?= __('Khachhang') ?></h3>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('danhxung') ?></th>
                <th scope="col"><?= $this->Paginator->sort('ten') ?></th>
                <th scope="col"><?= $this->Paginator->sort('dienthoai') ?></th>
                <th scope="col"><?= $this->Paginator->sort('email') ?></th>
                <th scope="col"><?= $this->Paginator->sort('khuvuc') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($khachhang as $khachhang): ?>
            <tr>
                <td><?= danhxung_khachhang($khachhang->danhxung) ?></td>
                <td><?= h($khachhang->ten) ?></td>
                <td><?= h($khachhang->dienthoai) ?></td>
                <td><?= h($khachhang->email) ?></td>
                <td><?= h($khachhang->khuvuc) ?></td>
                <td><?= h($khachhang->created) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $khachhang->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $khachhang->id], ['confirm' => __('Are you sure you want to delete # {0}?', $khachhang->id)]) ?>
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
