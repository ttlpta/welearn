<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="tacgia form large-9 medium-8 columns content">
    <?= $this->Form->create($tacgium, ['type' => 'file']) ?>
    <fieldset>
        <legend><?= __('Thêm tác giả') ?></legend>
        <?php
            echo $this->Form->control('Tên', ['name' => 'ten', 'required' => true]);
            echo $this->Form->control('Ảnh', ['type' => 'file', 'name' => 'anh', 'required' => true]);
        ?>
        <div class="input">
            <label for="mieuta">Miêu tả</label>
            <textarea name="mieuta" id="editor" ></textarea>
        </div>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
<?= $this->Html->script('initckEditor.js') ?>
<script>
    initCkEditor();
</script>
