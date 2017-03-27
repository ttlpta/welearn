<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="ve form large-9 medium-8 columns content">
    <?= $this->Form->create($ve) ?>
    <fieldset>
        <legend><?= __('Edit Ve') ?></legend>
        <?php
            echo $this->Form->control('ten');
            echo $this->Form->control('khoahoc_id');
            echo $this->Form->control('gia_thuong');
            echo $this->Form->control('gia_khuyenmai');
            echo $this->Form->control('quyenloi');
            echo $this->Form->control('soluong');
            echo $this->Form->control('diadiem');
            echo $this->Form->control('thoigian');
        ?>
        <select name="trangthai">
            <option value="0">Ngừng bán</option>
            <option value="1">Bán</option>
        </select>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>