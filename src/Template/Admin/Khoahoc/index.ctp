<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khoahoc index large-9 medium-8 columns content">
    <h3><?= __('Khoahoc') ?></h3>
    <?=$this->Html->link(
        'Thêm khóa học',
        ['prefix' => 'admin', 'controller' => 'Khoahoc', 'action' => 'add'])?>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('ten') ?></th>
                <th scope="col"><?= $this->Paginator->sort('luotxem') ?></th>
                <th scope="col"><?= $this->Paginator->sort('tacgia') ?></th>
                <th scope="col"><?= $this->Paginator->sort('trangthai') ?></th>
                <th scope="col"><?= $this->Paginator->sort('theloai') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col"><?= $this->Paginator->sort('updated') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($khoahoc as $khoahoc): ?>
            <tr>
                <td><?= h($khoahoc->ten) ?></td>
                <td><?= $this->Number->format($khoahoc->luotxem) ?></td>
                <td><?= h($khoahoc->tacgia) ?></td>
                <td><?= status($khoahoc->trangthai) ?></td>
                <td><?= theloai_khoahoc($khoahoc->theloai) ?></td>
                <td><?= h($khoahoc->created) ?></td>
                <td><?= h($khoahoc->updated) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $khoahoc->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $khoahoc->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $khoahoc->id], ['confirm' => __('Are you sure you want to delete # {0}?', $khoahoc->id)]) ?>
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
