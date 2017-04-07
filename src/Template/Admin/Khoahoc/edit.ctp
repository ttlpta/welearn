<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khoahoc form large-9 medium-8 columns content">
    <?= $this->Form->create($khoahoc, ['type' => 'file']) ?>
    <fieldset>
        <legend><?= __('Edit Khoahoc') ?></legend>
        <?php
            echo $this->Form->control('ten');
            echo $this->Form->control('mieutangan');
            echo $this->Form->control('luotxem');
        ?>
        <img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh?>" style="width: 670px; height: 380px"/>
        <?php
            echo $this->Form->control('Ảnh', ['type' => 'file', 'name' => 'anh']);
            echo $this->Form->control('video_youtube');
            echo $this->Form->control('theloai', ['options' => ['Trẻ em', 'Người lớn']]);
        ?>
        <div class="input required">
            <label for="tacgia">Tác giả</label>
            <select data-placeholder="Chọn tác giả" name="tacgia[]" class="chosen-select" multiple tabindex="4" required="required">
                <?php foreach($tacgias as $tacgia): ?>
                    <option value=""></option>
                    <option value="<?=$tacgia->id?>" <?=(in_array($tacgia->id, explode(',', $khoahoc->tacgia)) ? 'selected' : '')?>><?=$tacgia->ten?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <div class="input">
            <label for="mieuta">Nội dung</label>
            <textarea name="noidung" id="editor" ><?=$khoahoc->noidung?></textarea>
        </div>
        <?=$this->Form->control('trangthai', ['options' => ['Đóng', 'Mở']])?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
<?= $this->Html->script('initckEditor.js') ?>
<script>
    initCkEditor();
    $('.chosen-select').chosen();
</script>
