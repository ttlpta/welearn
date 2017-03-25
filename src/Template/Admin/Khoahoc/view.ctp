<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khoahoc view large-9 medium-8 columns content">
    <h3><?= h($khoahoc->id) ?></h3>
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
            <td><?= h($khoahoc->anh) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Video Youtube') ?></th>
            <td><?= h($khoahoc->video_youtube) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Noidung') ?></th>
            <td><?= h($khoahoc->noidung) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($khoahoc->id) ?></td>
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
            <td><?= $khoahoc->trangthai ? __('Yes') : __('No'); ?></td>
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
