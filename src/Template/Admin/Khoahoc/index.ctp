<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khoahoc index large-9 medium-8 columns content">
    <form method="post">
        <fieldset>
            <legend><?= __('Tìm kiếm khóa học') ?></legend>
            <div class="input">
                <label for="ten">Tên</label>
                <input type="text" name="ten" id="username">
            </div>
            <div class="input">
                <label for="tacgia">Tên tác giả</label>
                <select data-placeholder="Chọn tác giả" name="tacgia[]" class="chosen-select" multiple tabindex="4">
                    <?php foreach($tacgias as $tacgia): ?>
                        <option value="<?=$tacgia->id?>"><?=$tacgia->ten?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="input">
                <label for="theloai">Thể loại</label>
                <select name="theloai">
                    <option value=""></option>
                    <option value="0">Trẻ em</option>
                    <option value="1">Người lớn</option>
                </select>
            </div>
            <div class="input">
                <label for="trangthai">Trạng thái</label>
                <select name="trangthai">
                    <option value=""></option>
                    <option value="0">Đóng</option>
                    <option value="1">Mở</option>
                </select>
            </div>
        </fieldset>
        <button type="submit">Tìm kiếm</button>
        <?=$this->Html->link(
            'Trở lại danh sách đầy đủ',
            ['prefix' => 'admin', 'controller' => 'Khoahoc', 'action' => 'index'],
            ['class' => 'button'])?>
    </form>
    <hr>
    <h3><?= __('Khoahoc') ?></h3>
    <?=$this->Html->link(
        'Thêm khóa học',
        ['prefix' => 'admin', 'controller' => 'Khoahoc', 'action' => 'add'],
        ['class' => 'button'])?>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('ten', 'Tên khóa học') ?></th>
                <th scope="col"><?= $this->Paginator->sort('luotxem', 'Lượt xem') ?></th>
                <th scope="col"><?= $this->Paginator->sort('tacgia', 'Danh sách tác giả') ?></th>
                <th scope="col"><?= $this->Paginator->sort('trangthai', 'Trạng thái') ?></th>
                <th scope="col"><?= $this->Paginator->sort('theloai', 'Thể loại') ?></th>
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
<script>
    $('.chosen-select').chosen();
</script>
