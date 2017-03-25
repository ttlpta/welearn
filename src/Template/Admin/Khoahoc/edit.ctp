<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="khoahoc form large-9 medium-8 columns content">
    <?= $this->Form->create($khoahoc) ?>
    <fieldset>
        <legend><?= __('Edit Khoahoc') ?></legend>
        <?php
            echo $this->Form->control('ten');
            echo $this->Form->control('mieutangan');
            echo $this->Form->control('luotxem');
            echo $this->Form->control('tacgia');
            echo $this->Form->control('anh');
            echo $this->Form->control('video_youtube');
            echo $this->Form->control('noidung');
            echo $this->Form->control('trangthai');
        ?>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
