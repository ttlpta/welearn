<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="quanly view large-9 medium-8 columns content">
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Username') ?></th>
            <td><?= h($quanly->username) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Role') ?></th>
            <td><?= role_quanly_str($quanly->role) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Created') ?></th>
            <td><?= h($quanly->created) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Updated') ?></th>
            <td><?= h($quanly->updated) ?></td>
        </tr>
    </table>
</div>
