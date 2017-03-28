<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="donhang form large-9 medium-8 columns content">
    <?= $this->Form->create($donhang) ?>
    <fieldset>
        <legend><?= __('Edit Donhang') ?></legend>
        <?php
            echo $this->Form->control('khachhang_id', ['options' => $khachhang]);
            echo $this->Form->control('ve_id', ['options' => $ve]);
            echo $this->Form->control('soluong');
            echo $this->Form->control('note', ['type' => 'textarea']);
            echo $this->Form->control('trangthai', ['options' => ['Chưa gọi điện', 'Chờ thanh toán', 'Đã thanh toán']]);
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
