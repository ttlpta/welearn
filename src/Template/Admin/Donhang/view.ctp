<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="donhang view large-9 medium-8 columns content">
    <h3><?= h('Thông tin chi tiết đơn hàng') ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Khachhang') ?></th>
            <td><?= $donhang->has('khachhang') ? $this->Html->link(danhxung_khachhang($donhang->khachhang->danhxung).'. '.$donhang->khachhang->ten, ['controller' => 'Khachhang', 'action' => 'view', $donhang->khachhang->id],['target' => '_blank']) : '' ?></td>
        </tr>
        <tr>
            <th scope="row">Số điện thoại</th>
            <td><?= $donhang->has('khachhang') ? $this->Html->link($donhang->khachhang->dienthoai, ['controller' => 'Khachhang', 'action' => 'view', $donhang->khachhang->id], ['target' => '_blank']) : '' ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($donhang->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Updated') ?></th>
            <td><?= h($donhang->updated) ?></td>
        </tr>
        <tr>
            <table >
                <tr>
                    <th>Tên Khóa Học</th>
                    <th>Tên Vé</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                    <th>Lưu ý</th>
                    <th>Tổng tiền</th>
                    <th>Cập nhật trạng thái riêng</th>
                </tr>
                <tbody>
                <?php foreach($donhangByKhachhangIds as $donhang):?>
                    <tr>
                        <td> <?=$this->Html->link($khoahocs[$donhang->khoahoc_id], ['controller' => 'Khoahoc', 'action' => 'view', $donhang->khoahoc_id],['target' => '_blank'])?></td>
                        <td><?=$donhang->ve->ten?></td>
                        <td><?=$donhang->soluong?></td>
                        <td><?=status_donhang($donhang->trangthai)?></td>
                        <td><?=$donhang->note?></td>
                        <td><?=gia_daydu($donhang->tongtien)?></td>
                        <td><?= $this->Html->link(__('Cập nhật'), ['action' => 'edit', $donhang->id]) ?></td>
                    </tr>
                <?php endforeach;?>
                <tr>
                    <td>Tổng cộng</td>
                    <td colspan="3"></td>
                    <td><b><?=gia_daydu($tongTien)?></b></td>
                </tr>
                </tbody>
            </table>
        </tr>
    </table>
    <div class="donhang form large-12 columns content">
        <form method="post">
            <h4><?= 'Cập nhật trang thái chung' ?></h4>
            <?php
                echo $this->Form->control('trangthai', ['options' => ['Chưa gọi điện', 'Chờ thanh toán', 'Đã thanh toán', 'Hủy mua', 'Đã đặt cọc'], 'label' => 'Trạng thái'], ['class' => 'large-12']);
                echo $this->Form->control('note', ['type' => 'textarea', 'label' => 'Lưu ý'], ['class' => 'large-12']);
            ?>
            <?= $this->Form->button(__('Submit')) ?>
        </form>
    </div>
</div>
