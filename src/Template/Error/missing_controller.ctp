<body class='page_not_found template-404'>
    <div class='container-fluid'>
        <section class='row bg_main-color' id='section_404'>
        <div class='box_parent'>
            <div class='box_child'>
                <div class='logo'>
                    <?=$this->Html->image('404.png');?>
                </div>
                <div class='image'>
                    <!-- <img alt="404" class="img-responsive" src="welearn-img/logo.png" /> -->
                </div>
                <p class='lead'>
                    Thành thật xin lỗi!<br>Không tìm thấy nội dung bạn trỏ đến.
                </p>
                <div class='cta' onclick="window.history.back();">
                    <a class='btn btn-back' href='javasript:void(0)'><i class='material-icons'>arrow_back</i>Quay lại
                    </a>
                </div>
            </div>
        </div>
        </section>
    </div>
    <!-- End main -->
</body>
<?= $this->Html->css('main7'); ?>
