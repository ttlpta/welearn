<div class='container-wrapper' style='overflow: hidden;'>
<!--    <div class='banner banner_crosssell' id='header'></div>-->
    <main class='home'>
        <div class='container'>
            <div class='row' id='wrapCourseItems'>
                <div class='rec-div-holder' id='edumall.courses.middle.top'></div>
                <div class='col-sm-12 block_courses' id='category-top_paid' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Mua nhiều nhất</div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                        <?php if(count($khoahocMuaNhieuNhat) > LIMIT_COURSE_EACHPAGE/2):?>
                        <a class='btn btn-default btn-sm show-all' href='#'
                           style='background:white;text-transform:none'>Xem tất cả&nbsp;<i class='fa fa-plus-circle'></i>
                        </a>
                        <?php endif; ?>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card'>
                        <?php foreach($khoahocMuaNhieuNhat as $khoahoc): ?>
                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_TACGIA.'/'.$khoahoc->tacgia->anh?>" />
                                    </div>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'><?=$khoahoc->ten?></div>
                                    <div class='row ellipsis-2lines course-description'><?=$khoahoc->mieutangan?></div>
                                    <div class='row no-margin course-rating '><a href="#"><?=$khoahoc->tacgia->ten?></a></div>
                                    <div class='row no-margin course-price'>
                                        <span class="price"><?=$khoahoc->gia?><sup>đ</sup></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <?php endforeach;?>
                    </div>
                </div>
                <div class='col-sm-12 block_courses' id='category-top_favorite' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Được quan tâm nhất</div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                        <?php if(count($khoahocQuantamNhat) > LIMIT_COURSE_EACHPAGE/2):?>
                            <a class='btn btn-default btn-sm show-all' href='#'
                               style='background:white;text-transform:none'>Xem tất cả&nbsp;<i class='fa fa-plus-circle'></i>
                            </a>
                        <?php endif; ?>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card'>
                        <?php foreach($khoahocQuantamNhat as $khoahoc): ?>
                            <div class='course-card image-lazier'>
                                <a href='/khoa-hoc'>
                                    <div class='course-info'>
                                        <div class='avatar'>
                                            <img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_TACGIA.'/'.$khoahoc->tacgia->anh?>" />
                                        </div>
                                    </div>
                                    <div class='course-image no-margin'>
                                        <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <div class='course-card-content'>
                                        <div class='row ellipsis-2lines course-title'><?=$khoahoc->ten?></div>
                                        <div class='row ellipsis-2lines course-description'><?=$khoahoc->mieutangan?></div>
                                        <div class='row no-margin course-rating '><a href="#"><?=$khoahoc->tacgia->ten?></a></div>
                                        <div class='row no-margin course-price'>
                                            <span class="price"><?=$khoahoc->gia?><sup>đ</sup></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div class='col-sm-12 block_courses' id='category-other_courses' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Ngoài ra chúng tôi còn rất nhiều các khoá học thú vị khác
                    </div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card-no-collapse'></div>
                    <?php foreach($khoahocMoinhat as $khoahoc): ?>
                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_TACGIA.'/'.$khoahoc->tacgia->anh?>" />
                                </div>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'><?=$khoahoc->ten?></div>
                                <div class='row ellipsis-2lines course-description'><?=$khoahoc->mieutangan?></div>
                                <div class='row no-margin course-rating '><a href="#"><?=$khoahoc->tacgia->ten?></a></div>
                                <div class='row no-margin course-price'>
                                    <span class="price"><?=$khoahoc->gia?><sup>đ</sup></span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </main>
</div>