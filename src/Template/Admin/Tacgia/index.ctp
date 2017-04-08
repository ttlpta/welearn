<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="tacgia index large-10 medium-8 columns content">
    <form method="post">
        <fieldset>
            <legend><?= __('Tìm kiếm tác giả') ?></legend>
            <div class="input">
                <label for="ten">Tên tác giả</label>
                <input type="text" name="ten" id="username">
            </div>
        </fieldset>
        <button type="submit">Tìm kiếm</button>
        <?=$this->Html->link(
            'Trở lại danh sách đầy đủ',
            ['prefix' => 'admin', 'controller' => 'Tacgia', 'action' => 'index'],
            ['class' => 'button'])?>
    </form>
    <hr>
    <h3><?= __('Danh sách tác giả') ?></h3>
    <?=$this->Html->link(
        'Thêm tác giả',
        ['prefix' => 'admin', 'controller' => 'Tacgia', 'action' => 'add'],
        ['class' => 'button'])?>
    <table cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <th scope="col"><?= $this->Paginator->sort('ten', 'Tên') ?></th>
                <th scope="col"><?= $this->Paginator->sort('anh', 'Ảnh') ?></th>
                <th scope="col"><?= $this->Paginator->sort('created') ?></th>
                <th scope="col"><?= $this->Paginator->sort('updated') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($tacgia as $tacgium): ?>
            <tr>
                <td><?= h($tacgium->ten) ?></td>
                <td><img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_TACGIA.'/'.$tacgium->anh?>"/></td>
                <td><?= h($tacgium->created) ?></td>
                <td><?= h($tacgium->updated) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('Chi Tiết'), ['action' => 'view', $tacgium->id]) ?>
                    <?= $this->Html->link(__('Sửa'), ['action' => 'edit', $tacgium->id]) ?>
                    <?= $this->Form->postLink(__('Xóa'), ['action' => 'delete', $tacgium->id], ['confirm' => __('Are you sure you want to delete # {0}?', $tacgium->id)]) ?>
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
