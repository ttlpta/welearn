<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="donhang index large-9 medium-8 columns content">
    <form method="post">
        <fieldset>
            <legend><?= __('Tìm kiếm đơn hàng') ?></legend>
            <div class="input">
                <label for="ten">Tên khách hàng</label>
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
            <div class="input">
                <label for="ve">Tên vé</label>
                <input type="text" name="ve" id="ve" />
            </div>
            <div class="input">
                <label for="trangthai">Trạng thai</label>
                <select name="trangthai">
                    <option value=""></option>
                    <option value="0">Chưa gọi điện</option>
                    <option value="1">Chờ thanh toán</option>
                    <option value="2">Đã thanh toán</option>
                </select>
            </div>
        </fieldset>
        <button type="submit">Tìm kiếm</button>
        <?=$this->Html->link(
            'Trở lại danh sách đầy đủ',
            ['prefix' => 'admin', 'controller' => 'Donhang', 'action' => 'index'],
            ['class' => 'button'])?>
    </form>
    <hr>
    <h3><?= __('Donhang') ?></h3>
    <?=$this->Html->link(
        'Thêm đơn hàng',
        ['prefix' => 'admin', 'controller' => 'Donhang', 'action' => 'add'], ['class' => 'button'])?>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('khachhang_id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('khachhang_sdt') ?></th>
                <th scope="col"><?= $this->Paginator->sort('khachhang_email') ?></th>
                <th scope="col"><?= $this->Paginator->sort('ve_id') ?></th>
                <th scope="col"><?= $this->Paginator->sort('soluong') ?></th>
                <th scope="col"><?= $this->Paginator->sort('trangthai') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($donhang as $donhang): ?>
            <tr>
                <td>
                <?= $donhang->has('khachhang') ? 
                    $this->Html->link(
                    danhxung_khachhang($donhang->khachhang->danhxung).'. '.$donhang->khachhang->ten, 
                    ['controller' => 'Khachhang', 'action' => 'view', 
                    $donhang->khachhang->id], ['target' => '_blank']) : '' ?>
                </td>
                <td><?= $donhang->has('khachhang') ? $this->Html->link($donhang->khachhang->dienthoai, ['controller' => 'Khachhang', 'action' => 'view', $donhang->khachhang->id], ['target' => '_blank']) : '' ?></td>
                <td><?= $donhang->has('khachhang') ? $this->Html->link($donhang->khachhang->email, ['controller' => 'Khachhang', 'action' => 'view', $donhang->khachhang->id], ['target' => '_blank']) : '' ?></td>
                <td><?= $donhang->has('ve') ? $this->Html->link($donhang->ve->ten, ['controller' => 'Ve', 'action' => 'view', $donhang->ve->id ], ['target' => '_blank']) : '' ?></td>
                <td><?= $this->Number->format($donhang->soluong) ?></td>
                <td><?= status_donhang($donhang->trangthai) ?></td>
                <td><?= h($donhang->created) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['action' => 'view', $donhang->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['action' => 'edit', $donhang->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $donhang->id], ['confirm' => __('Are you sure you want to delete # {0}?', $donhang->id)]) ?>
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
