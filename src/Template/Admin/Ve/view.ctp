<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="ve view large-9 medium-8 columns content">
    <h3>Vé <?= h($ve->ten) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Ten') ?></th>
            <td><?= h($ve->ten) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Quyenloi') ?></th>
            <td><?= h($ve->quyenloi) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Diadiem') ?></th>
            <td><?= h($ve->diadiem) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Khoahoc') ?></th>
            <td><?= $this->Html->link(
                    $ve['khoahoc']->ten,
                    '/admin/khoahoc/view/'.$ve->khoahoc_id,
                    ['target' => '_blank']
                ); ?>
            </td>
        </tr>
        <tr>
            <th scope="row"><?= __('Gia Thuong') ?></th>
            <td><?= $this->Number->format($ve->gia_thuong) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Gia Khuyenmai') ?></th>
            <td><?= $this->Number->format($ve->gia_khuyenmai) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Trangthai') ?></th>
            <td><?= status_ban($ve->trangthai) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('ThoigianBatdau') ?></th>
            <td><?= h($ve->thoigian_batdau) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('ThoigianKethuc') ?></th>
            <td><?= h($ve->thoigian_kethuc) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($ve->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Updated') ?></th>
            <td><?= h($ve->updated) ?></td>
        </tr>
    </table>
    <div class="related">
        <h4><?= __('Related Donhang') ?></h4>
        <?php if (!empty($ve->donhang)): ?>
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th scope="col"><?= __('Khachhang Id') ?></th>
                <th scope="col"><?= __('Ve Id') ?></th>
                <th scope="col"><?= __('Soluong') ?></th>
                <th scope="col"><?= __('Note') ?></th>
                <th scope="col"><?= __('Trangthai') ?></th>
                <th scope="col"><?= __('Created') ?></th>
                <th scope="col"><?= __('Updated') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
            <?php foreach ($ve->donhang as $donhang): ?>
            <tr>
                <td><?= h($donhang->khachhang_id) ?></td>
                <td><?= h($donhang->ve_id) ?></td>
                <td><?= h($donhang->soluong) ?></td>
                <td><?= h($donhang->note) ?></td>
                <td><?= status_donhang($donhang->trangthai) ?></td>
                <td><?= h($donhang->created) ?></td>
                <td><?= h($donhang->updated) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['controller' => 'Donhang', 'action' => 'view', $donhang->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['controller' => 'Donhang', 'action' => 'edit', $donhang->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['controller' => 'Donhang', 'action' => 'delete', $donhang->id], ['confirm' => __('Are you sure you want to delete # {0}?', $donhang->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php endif; ?>
    </div>
</div>
