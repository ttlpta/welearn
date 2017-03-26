<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="tacgia form large-10 medium-8 columns content">
    <?= $this->Form->create($tacgium, ['type' => 'file']) ?>
    <fieldset>
        <legend><?= __('Sửa tác giả') ?></legend>
        <?php
            echo $this->Form->control('ten');?>
        <div class="input file">
            <label for="anh">Ảnh</label>
            <img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_TACGIA.'/'.$tacgium->anh?>"/>
            <input type="file" name="anh" id="anh">
        </div>
        <div class="input">
            <label for="mieuta">Miêu tả</label>
            <textarea name="mieuta" id="editor"><?=$tacgium->mieuta?></textarea>
        </div>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
<?= $this->Html->script('initckEditor.js') ?>
<script>
    initCkEditor();
</script>

