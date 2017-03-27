<nav class="large-2 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Menu') ?></li>
        <li><?= $this->Html->link(__('Danh sách quản lý'), ['controller' => 'Quanly', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('Danh sách tác giả'), ['controller' => 'Tacgia', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('Danh sách khóa học'), ['controller' => 'Khoahoc', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('Danh sách vé'), ['controller' => 'Ve', 'action' => 'index']) ?> </li>
    </ul>
</nav>