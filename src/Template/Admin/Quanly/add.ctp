<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="quanly form large-9 medium-8 columns content">
    <?= $this->Form->create($quanly, ['type' => 'file']) ?>
    <fieldset>
        <legend><?= __('Thêm quản lý') ?></legend>
        <?php
            echo $this->Form->control('username');
            echo $this->Form->control('password');
            echo $this->Form->control('Confirm password', ['type' => 'password', 'name' => 'confirm_password', 'required' => true]);
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
