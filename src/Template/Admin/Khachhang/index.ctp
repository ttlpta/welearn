<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khachhang index large-9 medium-8 columns content">
    <form method="post">
        <fieldset>
            <legend><?= __('Tìm kiếm khách hàng') ?></legend>
            <div class="input">
                <label for="ten">Tên</label>
                <input type="text" name="ten" id="ten" />
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div class="input">
                <label for="dienthoai">Số điện thoại</label>
                <input type="text" name="dienthoai" id="dienthoai" />
            </div>
        </fieldset>
        <button type="submit">Tìm kiếm</button>
        <?=$this->Html->link(
            'Trở lại danh sách đầy đủ',
            ['prefix' => 'admin', 'controller' => 'Khachhang', 'action' => 'index'],
            ['class' => 'button'])?>
    </form>
    <hr>
    <h3><?= __('Khachhang') ?></h3>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('danhxung', 'Danh xưng') ?></th>
                <th scope="col"><?= $this->Paginator->sort('ten', 'Tên') ?></th>
                <th scope="col"><?= $this->Paginator->sort('dienthoai', 'Số điện thoại') ?></th>
                <th scope="col"><?= $this->Paginator->sort('email', 'Email') ?></th>
                <th scope="col"><?= $this->Paginator->sort('khuvuc', 'Khu vực') ?></th>
                <th scope="col"><?= $this->Paginator->sort('khoahoctungthamgia', 'Khóa học đã tham gia') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($khachhang as $khachhang): ?>
            <tr>
                <td><?= danhxung_khachhang($khachhang->danhxung) ?></td>
                <td><?= h($khachhang->ten) ?></td>
                <td><?= h($khachhang->dienthoai) ?></td>
                <td><?= h($khachhang->email) ?></td>
                <td><?= h($khachhang->khuvuc) ?></td>
                <td><?= h($khachhang->khoahoctungthamgia) ?></td>
                <td><?= h($khachhang->created) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $khachhang->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $khachhang->id], ['confirm' => __('Are you sure you want to delete # {0}?', $khachhang->id)]) ?>
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
