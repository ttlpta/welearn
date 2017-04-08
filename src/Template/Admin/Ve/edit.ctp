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
        ?>
        <div class="input text">
            <label for="quyenloi">Quyền lợi</label>
            <textarea name="quyenloi" id="editor"><?=$ve->quyenloi?></textarea>
        </div>
        <?php
            echo $this->Form->control('diadiem');
            echo $this->Form->control('thoigian_batdau');
            echo $this->Form->control('thoigian_ketthuc');
            echo $this->Form->control('trangthai', ['options' => ['Ngừng bán', 'Bán']]);
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
<?= $this->Html->script('initckEditor.js') ?>
<script>
    initCkEditor();
</script>
