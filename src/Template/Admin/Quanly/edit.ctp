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
        ?>
        <div class="input required">
            <label for="role">Role</label>
            <select name="role" required="required">
                <option value="1" selected="selected">Quản lý</option>
                <option value="2">Nhân viên</option>    
            </select>
        </div>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
