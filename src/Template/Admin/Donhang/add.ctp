<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="donhang form large-9 medium-8 columns content">
    <?= $this->Form->create($donhang) ?>
    <fieldset>
        <legend><?= __('Add Donhang') ?></legend>
        <?php
            echo $this->Form->control('khachhang_id', ['options' => $khachhang]);
            echo $this->Form->control('ve_id', ['options' => $ve]);
            echo $this->Form->control('soluong');
            echo $this->Form->control('note', ['type' => 'textarea']);
        ?>
        <div class="input required">
            <label for="trangthai">Trạng thái</label>
            <select name="trangthai">
                <option value="0">Chưa gọi điện</option>
                <option value="1">Chờ thanh toán</option>
                <option value="2">Đã thanh toán</option>
            </select>
        </div>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
