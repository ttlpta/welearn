<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="quanly form large-9 medium-8 columns content">
    <?= $this->Form->create($quanly) ?>
    <fieldset>
        <legend><?= __('Edit Quản Lý') ?></legend>
        <?php
            echo $this->Form->control('username');
            echo $this->Form->control('password');
            echo $this->Form->control('role', ['options' => [1 => "Quản lý", 2 => 'Nhân viên']]);
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
