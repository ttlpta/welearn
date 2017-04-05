<div class='container-wrapper'>
<main class='category'>
    <div class='row no-margin category-header' style='background-color: background-color: #3a4f54;background: linear-gradient(-90deg, #577780, #36494e);'>
        <div class='row container'>
            <ul class='no-padding breadcrumb'>
                <li>
                    <a href='index.html'>
                        <i class='fa fa-home'></i>
                    </a>
                </li>
                <li class='breadcrumb-home'>
                    <a href='index.html'>Trang chủ</a>
                </li>
                <li>Chủ đề khác</li>
            </ul>
            <div class='row no-margin category-header-name'>
                <h2>Chủ đề khác</h2>
            </div>
        </div>
    </div>
    <div class='row no-margin category-all-courses' id='parent_style'>
        <div class='container'>
            <div class='col-lg-3 col-md-3 col-sm-12 no-padding category-all-courses-left'>

            </div>
            <div class='col-lg-9 col-md-9 col-sm-12 category-all-courses-main'>
                <div class='row no-margin'></div>
                <h3>Các khóa học nổi bật</h3>
                <div class='clearfix'>
                    <div class='card-category' id='courses_slider' style='position:relative;overflow:hidden;height:277px;'>
                        <div class='pre-card' style='position:absolute;top:45px;left:0px;background-color:#ffffff;'>
                            <a data-slide='prev' href='#' style='display:block;'>
                                <i class='fa fa-chevron-left'></i>
                            </a>
                        </div>
                        <div class='next-card' style='position:absolute;top:45px;right:0px;background-color:#ffffff;'>
                            <a data-slide='next' href='#' style='display:block;'>
                                <i class='fa fa-chevron-right'></i>
                            </a>
                        </div>
                        <div class='category-inner clearfix' style='width:20000px;position:absolute;top:0;left:0;'>
                            <?php foreach($khoahocQuantamNhat as $khoahoc): ?>
                            <div class='course-card-item'>
                                <div class='course-card image-lazier'>
                                    <a href="<?=$this->Url->build('/khoa-hoc/'.$khoahoc->id, true)?>">
                                        <div class='course-info'>
                                            <div class='avatar'>
                                                <img data-source="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_TACGIA.'/'.$khoahoc->tacgia->anh?>" />
                                            </div>
                                        </div>
                                        <div class='course-image no-margin'>
                                            <img data-source="<?=$this->Url->build('/'.DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh, true)?>" />
                                        </div>
                                        <div class='course-card-content'>
                                            <div class='row ellipsis-2lines course-title'><?=$khoahoc->ten?></div>
                                            <div class='row ellipsis-2lines course-description'><?=$khoahoc->tacgia->ten?></div>
                                            <div class='row no-margin course-price'><?=$khoahoc->gia?></div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <?php endforeach ?>
                        </div>
                    </div>
                </div>

                <!-- To be showed on mobile -->
                <div class='row no-margin feature-course-in-list'>
                    <div class='search-card'>
                        <?php foreach($tatCaKhoahoc as $khoahoc):?>
                        <a href='course/guitar-dem-hat-trong-30-ngay.html'>
                            <div class='row no-margin rel'>
                                <div class='image-course pull-left' style='background-image: url(<?=$this->Url->build('/'.DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh, true)?>)'></div>
                                <div class='content-course'>
                                    <div class='name-course'>Guitar đệm hát trong 30 ngày</div>
                                    <div class='about-author'>
                                        <span>Nguyễn Thượng Hiển</span>
                                    </div>
                                    <div class='info-course row no-margin'>
                                        <div class='real-price info-item'>
                                            699,000đ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <?php endforeach ?>
                    </div>


                </div>
                <h3>Tất cả các khóa học</h3>
                <div class='row no-margin courses-sorting'>

                    <ul class='pull-right'>
                        <li class='courses-sorting-title'>
                            Sắp xếp
                        </li>
                        <li style="padding-top: 5px;">
                            <form id='sorting-form' method='GET'>
                                <select onchange="this.form.submit()" name="price">
                                    <option value="">Mặc định</option>
                                    <option <?=($priceOrder == 'asc') ? 'selected' : '' ?> value="asc">Giá từ thấp đến cao</option>
                                    <option <?=($priceOrder == 'desc') ? 'selected' : '' ?> value="desc">Giá từ cao đến thấp</option>
                                </select>
                            </form>
                        </li>
                    </ul>
                </div>

                <div class='row no-margin courses-result'>
                    <?php foreach($tatCaKhoahoc as $khoahoc):?>
                    <div class='search-card'>
                        <a href='<?=$this->Url->build('/khoa-hoc/'.$khoahoc->id, true)?>'>
                            <div class='row no-margin rel'>
                                <div class='image-course pull-left' style='background-image: url(<?=$this->Url->build('/'.DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh, true)?>)'></div>
                                <div class='content-course'>
                                    <div class='name-course'><?=$khoahoc->ten?></div>
                                    <div class='about-author'>
                                        <span><?=$khoahoc->tacgia->ten?></span>
                                    </div>
                                    <div class='info-course row no-margin'>
                                        <div class='real-price info-item'>
                                            <?=$khoahoc->gia?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <?php endforeach?>
                </div>
                <div class='row no-margin courses-pagination'>
                    <nav style='text-align: center'><ul class='pagination' style='margin: 0px'>
                            <?php for($i = 1; $i <= $tongSoTrang; $i++) {?>
                            <li><a href="chu-de-khac4658.html?page=2"><?= $i ?></a></li>
                            <?php }?>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</main>
</div>
<?=$this->Html->script('main4')?>
