<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="tacgia view large-9 medium-8 columns content">
    <h3>Tác giả <?= h($tacgium->ten) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Tên') ?></th>
            <td><?= h($tacgium->ten) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Ảnh') ?></th>
            <td><img src="<?='http://localhost/welearn/'.DIR_UPLOAD_IMAGE_TACGIA.'/'.$tacgium->anh?>"/></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Miêu tả') ?></th>
            <td><textarea name="mieuta" id="editor" readonly="readonly"><?=$tacgium->mieuta?></textarea></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Ngày tạo') ?></th>
            <td><?= h($tacgium->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Ngày sửa') ?></th>
            <td><?= h($tacgium->updated) ?></td>
        </tr>
    </table>
</div>
<?= $this->Html->script('initckEditor.js') ?>
<script>
    initSample();
</script>

