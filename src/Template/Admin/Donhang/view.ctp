<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="donhang view large-9 medium-8 columns content">
    <h3><?= h('Thông tin chi tiết đơn hàng') ?></h3>
    <?=$this->Html->link(
        'Cập nhật trạng thái đơn hàng',
        ['prefix' => 'admin', 'controller' => 'Donhang', 'action' => 'edit', $donhang->id])?>
    <table class="vertical-table">
        <tr>
            <th scope="row">Khóa học</th>
            <td><?=$this->Html->link($khoahoc->ten, ['controller' => 'Khoahoc', 'action' => 'view', $khoahoc->id],['target' => '_blank'])?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Khachhang') ?></th>
            <td><?= $donhang->has('khachhang') ? $this->Html->link(danhxung_khachhang($donhang->khachhang->danhxung).'. '.$donhang->khachhang->ten, ['controller' => 'Khachhang', 'action' => 'view', $donhang->khachhang->id],['target' => '_blank']) : '' ?></td>
        </tr>
        <tr>
            <th scope="row">Số điện thoại</th>
            <td><?= $donhang->has('khachhang') ? $this->Html->link($donhang->khachhang->dienthoai, ['controller' => 'Khachhang', 'action' => 'view', $donhang->khachhang->id], ['target' => '_blank']) : '' ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Ve') ?></th>
            <td><?= $donhang->has('ve') ? $this->Html->link($donhang->ve->ten, ['controller' => 'Ve', 'action' => 'view', $donhang->ve->id], ['target' => '_blank']) : '' ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Note') ?></th>
            <td><?= h($donhang->note) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Soluong') ?></th>
            <td><?= $this->Number->format($donhang->soluong) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Trangthai') ?></th>
            <td><?= status_donhang($donhang->trangthai) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($donhang->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Updated') ?></th>
            <td><?= h($donhang->updated) ?></td>
        </tr>
    </table>
</div>
