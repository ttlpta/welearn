<main class='container-fluid' id='main'>
    <div class='row'>
        <section class='module-banner'>
            <div class='banner'></div>
        </section>
        <section class='module-1'>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-6 category first'>
                        <a href='<?=$this->Url->build('/', true)?>khoa-hoc-danh-cho-nguoi-lon'>
                            <h5>Người lớn</h5>
                            <?=$this->Html->image('cntt.png', ['alt' => 'Người lớn'])?>
                        </a>
                    </div>
                    <div class='col-md-6 category first'>
                        <a href='<?=$this->Url->build('/', true)?>khoa-hoc-danh-cho-tre-em'>
                            <h5>Trẻ em</h5>
                            <?=$this->Html->image('cntt.png', ['alt' => 'Trẻ em'])?>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- END MODULE-1 -->
        <section class='module-2'>
            <div class='container'>
                <?php foreach($khoahocMoinhatByChunks as $khoahocMoinhats): ?>
                <div class='row'>
                    <?php foreach($khoahocMoinhats as $khoahoc):?>
                    <div class='col-sm-6 col-md-3'>
                        <div class='thumbnail block-content'>
                            <a href='<?=$this->Url->build('/khoa-hoc/'.$khoahoc->id, true)?>'>
                                <?=$this->Html->image($this->Url->build('/', true).DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh)?>
                            </a>

                            <div class='caption'>
                                <div class='block-course'>
                                    <a href='<?=$this->Url->build('/khoa-hoc/'.$khoahoc->id, true)?>'>
                                        <h5><?=$khoahoc->ten?></h5>
                                    </a>
                                    <a class='teacher-link' href='<?=$this->Url->build('/tacgia/'.$khoahoc->tacgia->id, true)?>'><?=$khoahoc->tacgia->ten?></a>
                                </div>
                                <p class='price-like clearfix'>
                                    <span class='price'>
                                    <?=$khoahoc->gia?>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <?php endforeach ?>
                </div>
                <?php endforeach ?>
                <div class='show-time'>
                    <a href='<?=$this->Url->build('/', true).'tat-ca-khoa-hoc'?>'>Và rất nhiều khóa học hấp dẫn khác</a>
                </div>
            </div>
        </section>
    </div>
</main>
<!-- END MAIN -->
