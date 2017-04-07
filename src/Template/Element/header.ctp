<header class='container-fluid' id='header'>
    <div class='row'>
        <nav class='navbar navbar-default top-menu'>
            <div class='container-special clearfix'>
                <div class='container-fluid'>
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class='row'>
                        <div class='navbar-header'>
                            <button aria-expanded='false' class='navbar-toggle collapsed' data-target='#navbar-collapse'
                                    data-toggle='collapse' type='button'>
                                <span class='sr-only'>Toggle navigation</span>
                                <span class='icon-bar'></span>
                                <span class='icon-bar'></span>
                                <span class='icon-bar'></span>
                            </button>
                            <a class='navbar-brand' href='<?=$this->Url->build('/', true)?>'>
                                <?=$this->Html->image('logo.png', ['alt' => 'Logo', 'style' => "height: 55px;margin-top: -20px;"])?>
                            </a>
                        </div>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class='collapse navbar-collapse' id='navbar-collapse'></div>
                        <!-- /.navbar-collapse -->
                    </div>
                </div>
                <!-- /.container-fluid -->
            </div>
        </nav>
        <div class='carousel slide carousel-banner' data-ride='carousel'>
            <!-- Wrapper for slides -->
            <div class='carousel-inner' role='listbox'>
                <div class='item one active' style="background-image: url(<?=$this->Url->build('/', true)?>webroot/img/banner-home-1.png);">
                    <div class='carousel-caption hidden-xs target'>
                        <div class='container container-carousel animated fadeInUp'>
                            <h3 class='title-des'>Dễ học, dễ ứng dụng ngay</h3>

                            <div class='row description-carousel'>
                                <div class='col-sm-6 align-right'>
                                    <p><i aria-hidden='true' class='fa fa-check-square-o'></i>Ví dụ cụ thể, minh họa
                                        sinh động
                                    </p>
                                </div>
                                <div class='col-sm-6 align-left'>
                                    <p><i aria-hidden='true' class='fa fa-paper-plane'></i>Kho bài tập đa dạng, áp dụng
                                        thực tế ngay
                                    </p>
                                </div>
                            </div>
                            <a class='button' href='<?=$this->Url->build('/', true).'tat-ca-khoa-hoc'?>'>Khám phá BabyLons</a>
                        </div>
                    </div>
                </div>
                <div class='item two' style="background-image: url(<?=$this->Url->build('/', true)?>webroot/img/banner-home-2.png);">
                    <div class='carousel-caption hidden-xs target'>
                        <div class='container container-carousel animated fadeInUp'>
                            <h3 class='title-des'>
                                Sẵn sàng học mọi kỹ năng để làm chủ tương lai
                            </h3>

                            <div class='row description-carousel'>
                                <div class='col-sm-4 align-right'>
                                    <p><i aria-hidden='true' class='fa fa-database'></i>500+ Khóa học
                                    </p>
                                </div>
                                <div class='col-sm-4'>
                                    <p><i aria-hidden='true' class='fa fa-users'></i>200+ Giảng viên
                                    </p>
                                </div>
                                <div class='col-sm-4 align-left'>
                                    <p><i aria-hidden='true' class='fa fa-graduation-cap'></i>250,000 Học viên
                                    </p>
                                </div>
                            </div>
                            <a class='button' href='<?=$this->Url->build('/', true).'tat-ca-khoa-hoc'?>'>Khám phá BabyLons</a>
                        </div>
                    </div>
                </div>
                <div class='item three' style="background-image: url(<?=$this->Url->build('/', true)?>webroot/img/banner-home-3.png);">
                    <div class='carousel-caption hidden-xs target'>
                        <div class='container container-carousel animated fadeInUp'>
                            <h3 class='title-des'>
                                Sẵn sàng học mọi kỹ năng để làm chủ tương lai
                            </h3>

                            <div class='row description-carousel'>
                                <div class='col-sm-4 align-right'>
                                    <p><i aria-hidden='true' class='fa fa-database'></i>500+ Khóa học
                                    </p>
                                </div>
                                <div class='col-sm-4'>
                                    <p><i aria-hidden='true' class='fa fa-users'></i>200+ Giảng viên
                                    </p>
                                </div>
                                <div class='col-sm-4 align-left'>
                                    <p><i aria-hidden='true' class='fa fa-graduation-cap'></i>250,000 Học viên
                                    </p>
                                </div>
                            </div>
                            <a class='button' href='<?=$this->Url->build('/', true).'tat-ca-khoa-hoc'?>'>Khám phá BabyLons</a>
                        </div>
                </div>
            </div>
            <!-- Controls -->
            <a class='left carousel-control' data-slide='prev' href='.carousel-banner' role='button'>
                <i aria-hidden='true' class='fa fa-angle-left'></i>
            </a>
            <a class='right carousel-control' data-slide='next' href='.carousel-banner' role='button'>
                <i aria-hidden='true' class='fa fa-angle-right'></i>
            </a>
        </div>
        <!-- END NAVIGATION -->
    </div>
</header>
<!-- END HEADER -->