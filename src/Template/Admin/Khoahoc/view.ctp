<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khoahoc view large-9 medium-8 columns content">
    <h3><?= 'Khóa học '.$khoahoc->ten ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= 'Tên' ?></th>
            <td><?= h($khoahoc->ten) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= 'Miêu tả ngắn' ?></th>
            <td><?= h($khoahoc->mieutangan) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= 'Danh sách tác giả' ?></th>
            <td><?= h($khoahoc->tacgia) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= 'Ảnh đại diện' ?></th>
            <td><img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh?>" style="width: 670px; height: 380px"/></td>
        </tr>
        <tr>
            <th scope="row"><?= 'Video youtube ID' ?></th>
            <td>
                <?= $khoahoc->video_youtube ?>
            </td>
        </tr>
        <tr>
            <th scope="row"><?= 'Nội dung chi tiết' ?></th>
            <td><textarea name="noidung" id="editor" readonly="readonly"><?=$khoahoc->noidung?></textarea></td>
        </tr>
        <tr>
            <th scope="row"><?= 'Lượt xem' ?></th>
            <td><?= $this->Number->format($khoahoc->luotxem) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($khoahoc->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Updated') ?></th>
            <td><?= h($khoahoc->updated) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= 'Trạng thái' ?></th>
            <td><?= status($khoahoc->trangthai) ?></td>
        </tr>
    </table>
    <div class="related">
        <h4><?= 'Các đơn hàng của khóa học' ?></h4>
        <?php if (!empty($donhangs)): ?>
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th scope="col"><?= 'Tên khách hàng' ?></th>
                <th scope="col"><?= 'Lưu ý' ?></th>
                <th scope="col"><?= 'Trạng thái' ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
            <?php foreach ($donhangs as $donhang): ?>
            <tr>
                <td><?= h(danhxung_khachhang($donhang->khachhang->danhxung).'. '.$donhang->khachhang->ten) ?></td>
                <td><?= h($donhang->note) ?></td>
                <td><?= h(status_donhang($donhang->trangthai)) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['controller' => 'Donhang', 'action' => 'view', $donhang->id]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php endif; ?>
    </div>
    <div class="related">
        <h4><?= 'Các vé bán của khóa học' ?></h4>
        <?php if (!empty($khoahoc->ve)): ?>
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th scope="col"><?= 'Tên' ?></th>
                <th scope="col"><?= 'Giá thường' ?></th>
                <th scope="col"><?= 'Giá Khuyến mãi' ?></th>
                <th scope="col"><?= 'Trạng thái' ?></th>
                <th scope="col"><?= 'Địa điểm' ?></th>
                <th scope="col"><?= 'Thời gian bắt đầu' ?></th>
                <th scope="col"><?= 'Thời gian kết thúc' ?></th>
                <th scope="col"><?= __('Created') ?></th>
                <th scope="col"><?= __('Updated') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
            <?php foreach ($khoahoc->ve as $ve): ?>
            <tr>
                <td><?= h($ve->ten) ?></td>
                <td><?= h($ve->gia_thuong) ?></td>
                <td><?= h($ve->gia_khuyenmai) ?></td>
                <td><?= status_ban($ve->trangthai) ?></td>
                <td><?= h($ve->diadiem) ?></td>
                <td><?= h($ve->thoigian_batdau) ?></td>
                <td><?= h($ve->thoigian_ketthuc) ?></td>
                <td><?= h($ve->created) ?></td>
                <td><?= h($ve->updated) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['controller' => 'Ve', 'action' => 'view', $ve->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['controller' => 'Ve', 'action' => 'edit', $ve->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['controller' => 'Ve', 'action' => 'delete', $ve->id], ['confirm' => __('Are you sure you want to delete # {0}?', $ve->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php endif; ?>
    </div>
</div>
<?= $this->Html->script('initckEditor.js') ?>
<script>
    initCkEditor();
</script>
