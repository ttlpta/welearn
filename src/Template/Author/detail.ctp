<div class='container-wrapper' style='overflow: hidden;'>
    <main class='profile-view'>
        <div class='profile-info clearfix'>
            <div class='container no-padding'>
                <div class='row no-margin'>
                    <div class='top-text'>
                        <i class='fa fa-home'></i>
                        <span>/ Thông tin giảng viên</span>
                    </div>
                    <div class='col-md-3'>
                        <div class='row no-margin profile-detail'>
                            <div class='profile-avatar'>
                                <img class="image-profile img-circle" src="<?=$this->Url->build('/'.DIR_UPLOAD_IMAGE_TACGIA.'/'.$tacgia->anh, true)?>" alt="Unnamed" />
                            </div>
                        </div>
                    </div>
                    <div class='col-md-9'>
                        <div class='profile-description'>
                            <div class='row no-margin top-desc'>
                                <span class='description-item name'><?=$tacgia->ten ?></span>
                            </div>
                            <div class='row no-margin inst-desc'>
                                <?=$tacgia->mieuta ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='home clearfix' style='margin:80px 0 120px;'>
            <div class='container no-padding'>
                <div class='row no-margin'>
                    <div class='col-sm-12 block_courses' style='margin-top:20px;'>
                        <div class='category-title pull-left'>Các khóa học của giảng viên</div>
                        <div class='category-show-all pull-right visible-lg visible-md'>
                            <?php if(count($khoahocs) > LIMIT_COURSE_EACHPAGE/2):?>
                            <a class='btn btn-default btn-sm show-all' href='#' style='background:white;text-transform:none'>
                                Xem tất cả&nbsp;
                                <i class='fa fa-plus-circle'></i>
                            </a>
                            <?php endif; ?>
                        </div>
                        <div class='clearfix'></div>
                        <div class='list-course-card'>
                            <?php foreach($khoahocs as $khoahoc): ?>
                            <div class='course-card image-lazier'>
                                <a href='../course/thanh-thao-autocad-3d-1475221436.html'>
                                    <div class='course-info'>
                                        <div class='avatar'>
                                            <img src="<?=$this->Url->build('/'.DIR_UPLOAD_IMAGE_TACGIA.'/'.$tacgia->anh, true)?>" />
                                        </div>
                                    </div>
                                    <div class='course-image no-margin'>
                                        <img src="<?=$this->Url->build('/'.DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh, true)?>" />
                                    </div>
                                    <div class='course-card-content'>
                                        <div class='row ellipsis-2lines course-title'><?= $khoahoc->ten ?> </div>
                                        <div class='row ellipsis-2lines course-description'><?= $tacgia->ten ?> </div>
                                        <div class='row no-margin course-price'><?= $khoahoc->gia ?>đ</div>
                                    </div>
                                </a>
                            </div>
                            <?php endforeach ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</div>