<div class='container-wrapper' style='overflow: hidden;'>
    <div class='banner banner_crosssell' id='header'></div>
    <main class='home'>
        <div class='container'>
            <div class='row' id='wrapCourseItems'>
                <div class='rec-div-holder' id='edumall.courses.middle.top'></div>
                <div class='col-sm-12 block_courses' id='category-top_paid' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Mua nhiều nhất</div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                        <a class='btn btn-default btn-sm show-all' href='#'
                           style='background:white;text-transform:none'>
                            Xem tất cả&nbsp;
                            <i class='fa fa-plus-circle'></i>
                        </a>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card'>
                        <?php foreach($khoahocs as $khoahoc): ?>
                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-1lines course-title'><?=$khoahoc->ten?></div>
                                    <div class='row ellipsis-1lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <?php endforeach;?>
                    </div>
                </div>
                <div class='col-sm-12 block_courses' id='category-top_rate' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Đánh giá cao nhất</div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                        <a class='btn btn-default btn-sm show-all' href='#'
                           style='background:white;text-transform:none'>
                            Xem tất cả&nbsp;
                            <i class='fa fa-plus-circle'></i>
                        </a>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card'>
                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class='col-sm-12 block_courses' id='category-top_new' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Mới hay nhất</div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                        <a class='btn btn-default btn-sm show-all' href='#'
                           style='background:white;text-transform:none'>
                            Xem tất cả&nbsp;
                            <i class='fa fa-plus-circle'></i>
                        </a>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card'>
                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class='col-sm-12 block_courses' id='category-top_favorite' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Được quan tâm nhất</div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                        <a class='btn btn-default btn-sm show-all' href='#'
                           style='background:white;text-transform:none'>
                            Xem tất cả&nbsp;
                            <i class='fa fa-plus-circle'></i>
                        </a>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card'>
                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class='course-card image-lazier'>
                            <a href='/khoa-hoc'>
                                <div class='course-info'>
                                    <div class='avatar'>
                                        <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                    </div>
                                    <span>21 bài giảng</span>
                                </div>
                                <div class='course-image no-margin'>
                                    <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <div class='course-card-content'>
                                    <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                        nhà
                                    </div>
                                    <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                    <div class='row no-margin course-rating'>
                                        <div class='rating-container'>
                                            <div class='pull-left' id='percent-rating'>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
                                                <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row no-margin course-price'>699,000đ</div>
                                </div>
                            </a>

                            <div class='course-wishlist'>
                                <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                    <div class='wishlist-heart-icon'>
                                        <i class='fa fa-heart'></i>
                                    </div>
                                    <div class='wishlist-tooltip'>
                                        <div class='wishlist-tooltip-bg'>
                                            <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                        </div>
                                        <div class='wishlist-tooltip-inner'>
                                            <span style='font-size: 12px;'>Quan tâm</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class='col-sm-12 block_courses' id='category-other_courses' style='margin-top:20px;'>
                    <div class='category-title pull-left'>Ngoài ra chúng tôi còn rất nhiều các khoá học thú vị khác
                    </div>
                    <div class='category-show-all pull-right visible-lg visible-md'>
                    </div>
                    <div class='clearfix'></div>
                    <div class='list-course-card-no-collapse'></div>
                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class='course-card image-lazier'>
                        <a href='/khoa-hoc'>
                            <div class='course-info'>
                                <div class='avatar'>
                                    <?= $this->Html->image('avatar_linhdh2_new-profile.jpg', ['alt' => 'anh tieu su tran nam anh']) ?>
                                </div>
                                <span>21 bài giảng</span>
                            </div>
                            <div class='course-image no-margin'>
                                <?= $this->Html->image('anhtn01-noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.png', ['alt' => 'anh tieu su tran nam anh']) ?>main
                            </div>
                            <div class='course-card-content'>
                                <div class='row ellipsis-2lines course-title'>Yoga trực tuyến - khỏe đẹp ngay tại
                                    nhà
                                </div>
                                <div class='row ellipsis-2lines course-description'>Nguyễn Hiếu</div>
                                <div class='row no-margin course-rating'>
                                    <div class='rating-container'>
                                        <div class='pull-left' id='percent-rating'>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
                                            <i class='fa fa-star rated'></i>
<span class='rating-percent'>
<i class='fa fa-star'></i>
<i class='fa fa-star percent' style='width: 79.99999999999999%'></i>
</span>
                                        </div>
                                    </div>
                                </div>
                                <div class='row no-margin course-price'>699,000đ</div>
                            </div>
                        </a>

                        <div class='course-wishlist'>
                            <a class='wishlist-heart' val='57564015047c9966e84cc85c'>
                                <div class='wishlist-heart-icon'>
                                    <i class='fa fa-heart'></i>
                                </div>
                                <div class='wishlist-tooltip'>
                                    <div class='wishlist-tooltip-bg'>
                                        <i class='fa fa-sort-asc wishlist-tooltip-arrow'></i>
                                    </div>
                                    <div class='wishlist-tooltip-inner'>
                                        <span style='font-size: 12px;'>Quan tâm</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
</div>

<?//=$this->Html->script('main3.js')?>