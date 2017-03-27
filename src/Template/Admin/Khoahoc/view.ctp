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
            <th scope="row"><?= __('Ten') ?></th>
            <td><?= h($khoahoc->ten) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Mieutangan') ?></th>
            <td><?= h($khoahoc->mieutangan) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Tacgia') ?></th>
            <td><?= h($khoahoc->tacgia) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Anh') ?></th>
            <td><img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh?>" style="width: 670px; height: 380px"/></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Video Youtube') ?></th>
            <td>
                <?= $khoahoc->video_youtube ?>
            </td>
        </tr>
        <tr>
            <th scope="row"><?= __('Noidung') ?></th>
            <td><textarea name="noidung" id="editor" readonly="readonly"><?=$khoahoc->noidung?></textarea></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Luotxem') ?></th>
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
            <th scope="row"><?= __('Trangthai') ?></th>
            <td><?= status($khoahoc->trangthai) ?></td>
        </tr>
    </table>
    <div class="related">
        <h4><?= __('Related Ve') ?></h4>
        <?php if (!empty($khoahoc->ve)): ?>
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th scope="col"><?= __('Id') ?></th>
                <th scope="col"><?= __('Ten') ?></th>
                <th scope="col"><?= __('Khoahoc Id') ?></th>
                <th scope="col"><?= __('Gia Thuong') ?></th>
                <th scope="col"><?= __('Gia Khuyenmai') ?></th>
                <th scope="col"><?= __('Quyenloi') ?></th>
                <th scope="col"><?= __('Trangthai') ?></th>
                <th scope="col"><?= __('Soluong') ?></th>
                <th scope="col"><?= __('Diadiem') ?></th>
                <th scope="col"><?= __('Thoigian') ?></th>
                <th scope="col"><?= __('Created') ?></th>
                <th scope="col"><?= __('Updated') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
            <?php foreach ($khoahoc->ve as $ve): ?>
            <tr>
                <td><?= h($ve->id) ?></td>
                <td><?= h($ve->ten) ?></td>
                <td><?= h($ve->khoahoc_id) ?></td>
                <td><?= h($ve->gia_thuong) ?></td>
                <td><?= h($ve->gia_khuyenmai) ?></td>
                <td><?= h($ve->quyenloi) ?></td>
                <td><?= h($ve->trangthai) ?></td>
                <td><?= h($ve->soluong) ?></td>
                <td><?= h($ve->diadiem) ?></td>
                <td><?= h($ve->thoigian) ?></td>
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
