<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="ve index large-9 medium-8 columns content">
    <form method="post">
        <fieldset>
            <legend><?= __('Tìm kiếm vé') ?></legend>
            <div class="input">
                <label for="ten">Tên</label>
                <input type="text" name="ten" id="ten
                ">
            </div>
            <div class="input">
                <label for="khoahoc_id">Khóa học</label>
                <select name="khoahoc_id">
                    <option value=""></option>
                    <?php foreach($khoahocs as $id => $khoahoc): ?>
                        <option value="<?=$id?>"><?=$khoahoc?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="input">
                <label for="diadiem">Địa điểm</label>
                <input type="text" name="diadiem" id="diadiem">
            </div>
            <div class="input">
                <label for="trangthai">Trạng thai</label>
                <select name="trangthai">
                    <option value=""></option>
                    <option value="0">Ngừng bán</option>
                    <option value="1">Bán</option>
                </select>
            </div>
        </fieldset>
        <button type="submit">Tìm kiếm</button>
        <?=$this->Html->link(
            'Trở lại danh sách đầy đủ',
            ['prefix' => 'admin', 'controller' => 'Ve', 'action' => 'index'],
            ['class' => 'button'])?>
    </form>
    <hr>
    <h3><?= __('Ve') ?></h3>
    <?=$this->Html->link(
        'Thêm Vé',
        ['prefix' => 'admin', 'controller' => 'Ve', 'action' => 'add'])?>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('ten') ?></th>
                <th scope="col"><?= $this->Paginator->sort('khoahoc_id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('gia_thuong') ?></th>
                <th scope="col"><?= $this->Paginator->sort('gia_khuyenmai') ?></th>
                <th scope="col"><?= $this->Paginator->sort('diadiem') ?></th>
                <th scope="col"><?= $this->Paginator->sort('thoigian') ?></th>
                <th scope="col"><?= $this->Paginator->sort('trangthai') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($ve as $ve): ?>
            <tr>
                <td><?= h($ve->ten) ?></td>
                <td><?= $ve['khoahoc']->ten ?></td>
                <td><?= $this->Number->format($ve->gia_thuong) ?></td>
                <td><?= $this->Number->format($ve->gia_khuyenmai) ?></td>
                <td><?= h($ve->diadiem) ?></td>
                <td><?= h($ve->thoigian) ?></td>
                <td><?= status_ban($ve->trangthai) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $ve->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $ve->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $ve->id], ['confirm' => __('Are you sure you want to delete # {0}?', $ve->id)]) ?>
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
