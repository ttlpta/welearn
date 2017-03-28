<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khachhang view large-9 medium-8 columns content">
    <h3>Thông tin khách hàng</h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Danhxung') ?></th>
            <td><?= danhxung_khachhang($khachhang->danhxung) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Ten') ?></th>
            <td><?= h($khachhang->ten) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Dienthoai') ?></th>
            <td><?= h($khachhang->dienthoai) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Email') ?></th>
            <td><?= h($khachhang->email) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Namsinh') ?></th>
            <td><?= h($khachhang->namsinh) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Khuvuc') ?></th>
            <td><?= h($khachhang->khuvuc) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Lydobiet') ?></th>
            <td><?= h($khachhang->lydobiet) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Nguoigioithieu') ?></th>
            <td><?= h($khachhang->nguoigioithieu) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Datungthamgia') ?></th>
            <td><?= status_thamgiakhoahoc($khachhang->datungthamgia) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($khachhang->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Updated') ?></th>
            <td><?= h($khachhang->updated) ?></td>
        </tr>
    </table>
    <div class="related">
        <h4><?= __('Related Donhang') ?></h4>
        <?php if (!empty($khachhang->donhang)): ?>
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
            <?php foreach ($khachhang->donhang as $donhang): ?>
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
