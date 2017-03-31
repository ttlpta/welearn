<div class='slider-sidebar-wrapper slider-sidebar-mobile'></div>
<!-- + Banner -->
<div class='container-wrapper' style='overflow: hidden;'>
    <div class='bg-detail no-padding no-margin'>
        <div class='banner'>
            <script>
                var tag = document.createElement('script');

                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                var player;
                function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {
                        height: '100%',
                        width: '100%',
                        playerVars: {
                            autoplay: 1,
                            loop: 1,
                            controls: 0,
                            showinfo: 0,
                            autohide: 1,
                            modestbranding: 1,
                            vq: 'hd1080'
                        },
                        videoId: 'JW5meKfy3fY',
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }

                function onPlayerReady(event) {
                    event.target.playVideo();
                    player.mute();
                }

                var done = false;
                function onPlayerStateChange(event) {

                }
                function stopVideo() {
                    player.stopVideo();
                }
            </script>
        </div>
        <!-- Menu fix -->
        <div class='row no-margin menu-fixed' style='border-bottom:1px solid #cccccc'>
            <div class='container'>
                <ul class='nav nav-pills'>
                    <li class='active'>
                        <a href='#description'>Mô tả chi tiết</a>
                    </li>
                    <li>
                        <a href='#curiculums'>Giáo trình</a>
                    </li>
                    <li>
                        <a href='#author'>Giảng viên</a>
                    </li>
                    <li>
                        <a href='#rating'>Đánh giá</a>
                    </li>
                </ul>
            </div>
            <ul class='menu-fixed-right'>
                <li>
                    <a class='btn btn-raised btn-lg buy-button'
                       href='../users/sign_in.html?alias_name=noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong&amp;type=learning'
                       style='padding:5px 15px'>
                        <i class='fa fa-shopping-cart'></i>
                        Mua khóa học
                    </a>
                </li>
                <li>
                    <h3 class='course-price-text no-margin bold' style='margin: 0; padding-top: 10px'>549,000đ</h3>
                </li>
            </ul>
        </div>
        <!-- + Detail content -->
        <div class='detail'>
            <div class='detail-top'>
                <div class='detail-top-content'>
                    <h1 class='course-title'>Nói thoả thích 8 tiếng mỗi ngày mà không lo mất giọng</h1>

                    <div class='sub-title'>Các phương pháp luyện hơi giúp bạn có một giọng nói khỏe mạnh, đảm bảo hiệu
                        quả công việc.
                    </div>
                    <div class='course-rating'>
                        <div class='course-rating-point'>
                            <div class='pull-left' id='percent-rating'>
                                <i class='fa fa-star rated'></i>
                                <i class='fa fa-star rated'></i>
                                <i class='fa fa-star rated'></i>
                                <i class='fa fa-star rated'></i>
                        <span class='rating-percent'>
                        <i class='fa fa-star'></i>
                        <i class='fa fa-star percent' style='width: 0.0%'></i>
                        </span>
                            </div>
                        </div>
                        <!-- - if !@course.fake_enabled -->
                        <!-- .course-rating-people= @course.average_rating.to_s + ' (' + @course.num_rate.to_s + ' đánh giá) - ' + @course.views.to_s + ' người đã xem' -->
                        <!-- - else -->
                        <!-- .course-rating-people= @course.average_rating.to_s + ' (' + @course.num_rate.to_s + ' đánh giá) - ' + @course.views.to_s + ' người đã xem' -->
                        <div class='course-rating-people'>4.0 (33 đánh giá) - 56583 người đã xem</div>
                    </div>
                    <div class='course-author'>
                        Giảng dạy bởi
                        <a class='link-text normal-text' href='../users/trannamanh.html' target='_blank'>Trần Nam
                            Anh</a>
                    </div>
                    <div class='course-detail'>
                        <div class='course-player'>
                            <div class='video-container no-controls'>
                                <iframe allowfullscreen='' frameborder='0' height='100%'
                                        src='https://www.youtube.com/embed/dq0QRphUy-A?modestbranding=0&amp;amp;rel=0&amp;amp;showinfo=0'
                                        style='min-height:345px' width='100%'></iframe>
                            </div>
                        </div>
                        <div class='course-detail-bottom'>
                            <div class='course-detail-bottom-left'>
                                <div class='course-price'>
                                    <h3 class='course-price-text no-margin bold'>549,000đ</h3>
                                    <!-- %h3.course-price-text.no-margin{:style => 'margin: 0'} -->
                                    <!-- %span{:style => ''}=currency[0] -->
                                    <!-- %span{:style => 'font-size:14px !important;margin-left:-6px;'}=currency[1] -->
                                </div>
                                <div class='course-purchase'>
                                    <div class='purchase-submit'>
                                        <a class='btn btn-raised btn-lg buy-button'
                                           href='../cart/cod/noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong.html'>
                                            <i class='fa fa-shopping-cart'></i>
                                            Mua khóa học
                                        </a>
                                    </div>
                                    <div class='cart-submit'>
                                        <a class='btn btn-success btn btn-raised btn-lg cart-button'>
                                            <i class='fa fa-plus'></i>
                                            Thêm vào giỏ hàng
                                        </a>
                                    </div>
                                    <div class='sale-submit'>
                                        <a class='link-text dropdown-button' data-target='.discussion-dropdown'
                                           data-toggle='dropdown' href='#' id='coupon-dropdown-button'
                                           style='display: inline-block;'>
                                            <h5 class='bold-text link-text'>Nhập mã khuyến mãi</h5>
                                        </a>
                                        <ul class='dropdown-menu' id='coupon-dropdown'
                                            style='height: 80px; width: 332px; position: absolute; left: 0; padding: 20px;'>
                                            <form
                                                action='https://edumall.vn/courses/noi-thoa-thich-8-tieng-moi-ngay-ma-khong-lo-mat-giong/detail'
                                                method='GET'>
                                                <input class='course_id' type='hidden' value='56010a07fc32e004ca000000'>
                                                <li>
                                                    <div class='row no-margin'>
                                                        <input class='form-control coupon_code' name='coupon_code'
                                                               placeholder='Nhập mã khuyến mại'
                                                               style='height: 40px; width: 178px; margin-right:10px; display: inline'
                                                               type='text' value=''>
                                                        <input class='btn btn-primary coupon-submit' type='submit'
                                                               value='Nhập'>
                                                    </div>
                                                </li>
                                            </form>
                                        </ul>
                                    </div>
                                    <div class='report'></div>
                                </div>
                            </div>
                            <div class='course-detail-bottom-right'>
                                <div class='course-wishlist'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='detail-bottom'>
                <div class='bottom-left'>
                    <div class='row no-margin' id='description'>
                        <div class='row no-margin'>
                            <div class='title'>
                                <h4>Mô tả về khóa học</h4>
                                <h5 style='font-weight: 500;'>Nói thoả thích 8 tiếng mỗi ngày mà không lo mất giọng</h5>
                            </div>
                            <div class='row no-margin' id='short-description-container'>
                                <div id='short-description'>
                                    <p>C&oacute; bao giờ bạn cảm thấy hụt hẫng v&igrave; giọng n&oacute;i &ldquo;yếu ớt&rdquo;
                                        của m&igrave;nh?</p>

                                    <p>C&oacute; bao giờ bạn cảm thấy thất vọng v&igrave; cứ mỗi lần n&oacute;i chuyện
                                        hay thuyết tr&igrave;nh lại bị hụt hơi nửa chừng? Tạo sự bối rối cho người đối
                                        diện v&agrave; cả cho ch&iacute;nh bạn?</p>

                                    <p>Bạn đ&atilde; từng tham dự rất nhiều kh&oacute;a đ&agrave;o tạo thuyết tr&igrave;nh
                                        nhưng chỉ ri&ecirc;ng giọng n&oacute;i lại chưa thể cải thiện được?</p>

                                    <p>Trong khi đ&oacute;, giọng n&oacute;i, đặc biệt l&agrave; l&agrave;n hơi, ch&iacute;nh
                                        l&agrave; thước đo đ&aacute;nh dấu sự tự tin v&agrave; khỏe mạnh của một người
                                        trong lần đầu ti&ecirc;n giao tiếp.</p>
                                </div>
                            </div>
                            <div class='row no-margin' id='long-description-container'>
                                <div id='long-description'>
                                    <p>C&oacute; bao giờ bạn cảm thấy hụt hẫng v&igrave; giọng n&oacute;i &ldquo;yếu ớt&rdquo;
                                        của m&igrave;nh?</p>

                                    <p>C&oacute; bao giờ bạn cảm thấy thất vọng v&igrave; cứ mỗi lần n&oacute;i chuyện
                                        hay thuyết tr&igrave;nh lại bị hụt hơi nửa chừng? Tạo sự bối rối cho người đối
                                        diện v&agrave; cả cho ch&iacute;nh bạn?</p>

                                    <p>Bạn đ&atilde; từng tham dự rất nhiều kh&oacute;a đ&agrave;o tạo thuyết tr&igrave;nh
                                        nhưng chỉ ri&ecirc;ng giọng n&oacute;i lại chưa thể cải thiện được?</p>

                                    <p>Trong khi đ&oacute;, giọng n&oacute;i, đặc biệt l&agrave; l&agrave;n hơi, ch&iacute;nh
                                        l&agrave; thước đo đ&aacute;nh dấu sự tự tin v&agrave; khỏe mạnh của một người
                                        trong lần đầu ti&ecirc;n giao tiếp.</p>

                                    <p>Chất giọng mỗi người l&agrave; bẩm sinh, nhưng việc sở hữu l&agrave;n hơi khỏe
                                        mạnh lại l&agrave; kỹ năng m&agrave; bất kỳ ai trong ch&uacute;ng ta cũng c&oacute;
                                        thể r&egrave;n luyện được.</p>

                                    <p>Chỉ th&ocirc;ng qua kh&oacute;a học k&eacute;o d&agrave;i hơn 2 giờ, bạn sẽ học
                                        được phương ph&aacute;p m&agrave; tất cả c&aacute;c DIỄN VI&Ecirc;N, CA SĨ chuy&ecirc;n
                                        nghiệp n&agrave;o cũng đ&atilde; từng luyện tập qua. Kh&ocirc;ng l&yacute;
                                        thuyết kh&oacute; hiểu, nội dung giảng dạy sinh động v&agrave; hấp dẫn, phần
                                        thực h&agrave;nh m&ocirc; phỏng v&ocirc; c&ugrave;ng kỹ lưỡng v&agrave; chuy&ecirc;n
                                        nghiệp từ chuy&ecirc;n gia, tin chắc rằng bạn sẽ tự tin để thực h&agrave;nh r&egrave;n
                                        luyện giọng n&oacute;i mỗi ng&agrave;y ngay sau đ&oacute;.</p>

                                    <p>H&atilde;y để người th&acirc;n v&agrave; bạn b&egrave; của bạn ngạc nhi&ecirc;n
                                        về l&agrave;n hơi khỏe mạnh của bạn sau thời gian 2 tuần luyện tập bạn
                                        nh&eacute;</p>
                                </div>
                            </div>
                            <div class='col-xs-12 no-padding' style=''>
                                <a class='link-text load-more' style='cursor: pointer'>
                                    <b>Xem chi tiết</b>
                                </a>
                            </div>
                        </div>
                        <div class='row no-margin'>
                            <!-- requirement -->
                            <h5 class='title'>
                                <b>Yêu cầu của khóa học</b>
                            </h5>
                            <ul class='no-padding' style='list-style: none'>
                                <li>
                                    <p>• Môi trường học là nơi yên tĩnh.</p>
                                </li>
                                <li>
                                    <p>• Cần có khả năng truy cập Internet.</p>
                                </li>
                                <li>
                                    <p>• Nên sử dụng tai nghe trong quá trình học.</p>
                                </li>
                                <li>
                                    <p>• Cần có thảm để tập luyện.</p>
                                </li>
                            </ul>
                            <!-- benefit -->
                            <h5 class='title'>
                                <b>Lợi ích từ khóa học</b>
                            </h5>
                            <ul class='no-padding' style='list-style: none'>
                                <li>
                                    <p>Sau khi học xong khóa học này, học viên sẽ:</p>
                                </li>
                                <li>
                                    <p>• Hiểu được ý nghĩa và tầm quan trọng của việc luyện hơi.</p>
                                </li>
                                <li>
                                    <p>• Biết được những phương pháp luyện hơi hiệu quả.</p>
                                </li>
                                <li>
                                    <p>• Hiểu được tầm quan trọng của việc bảo vệ sức khoẻ cổ họng.</p>
                                </li>
                                <li>
                                    <p>• Biết được các cách bảo vệ sức khoẻ cổ họng.</p>
                                </li>
                                <li>
                                    <p>• Biết được các phương pháp thực hành luyện hơi.</p>
                                </li>
                            </ul>
                            <!-- audience -->
                            <h5 class='title'>
                                <b>Đối tượng mục tiêu</b>
                            </h5>
                            <ul class='no-padding' style='list-style: none'>
                                <li>
                                    <p>• Là những học viên có mong muốn có một làn hơi khoẻ mạnh.</p>
                                </li>
                                <li>
                                    <p>• Là những học viên cảm thấy khó khăn khi giao tiếp.</p>
                                </li>
                                <li>
                                    <p>• Là những học viên muốn luyện tập để trở thành MC, diễn giả.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id='author'>
                        <div class='author-title'>Tiểu sử tác giả</div>
                        <div class='author-content'>
                            <div class='author-avatar'>
                                <?= $this->Html->image('course_image_anh-tieu-su-tran-nam-anh.png', ['alt' => 'anh tieu su tran nam anh']) ?>
                            </div>
                            <div class='author-description'>
                                <div class='no-margin'></div>
                                <a class='author-title' href='#!' style='color: #464646;'>
                                    <span style='font-size:14px'></span>
                                    <a href='../users/trannamanh.html'
                                       style='float:left; font-weight:bold; font-size:20px;' target='_blank'>Trần Nam
                                        Anh</a>
                                </a>

                                <div class='row no-margin'>
                                    <div class='col-xs-12 no-padding' style='color: #797979;'>
                                        Nghề nghiệp: Giảng viên nghệ thuật - Diễn viên - Đạo diễn - Nghệ sĩ
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='author-information'>
                            <h5 class='information-text'>TRẦN NAM ANH - bậc thầy huấn luyện về giọng nói nổi tiếng trong
                                và ngoài nước, với hơn 22 năm kinh nghiệm trong nghề. </h5>
                            <h5 class='information-text'>Ông xuất thân từ Huế, nhưng huấn luyện giọng cho nhiều ca sĩ,
                                diễn viên miền Bắc và cả miền Nam. Đặc biệt, ông được công nhận là chuyên gia huấn luyện
                                tiếng nói (Voice Coach), đã đào tạo và giúp cho rất nhiều diễn giả, MC, ca sĩ, diễn
                                viên, xướng ngôn viên, hoa hậu,... thành công tuyệt đỉnh khi đứng trên sân khấu. Hiện
                                ông là Trưởng Khoa tiếng nói trường Đại học Sân khấu điện ảnh Tp.HCM.</h5>
                            <h5 class='information-text'>Khách hàng tiêu biểu</h5>
                            <h5 class='information-text'>• Các Đài phát thanh và truyền hình: Đài Tiếng nói nhân dân Tp
                                HCM (VOH), VTV, HTV, Vĩnh Long (THVL), Bà rịa - Vũng tàu (BRT)...</h5>
                            <h5 class='information-text'>• NVH Thanh Niên Tp.HCM: đào tạo hơn 60 khóa MC, 80 khóa Nghệ
                                thuật nói chuyện trước công chúng.</h5>
                            <h5 class='information-text'>Những học trò hiện nay là những diễn giả, nghệ sỹ tên tuổi
                                như:</h5>
                            <h5 class='information-text'>• Diễn giả: Quách Tuấn Khanh, Trần Đức Tuấn, Lê Nhật Trường
                                Chinh, Hồng Phương Lan...</h5>
                            <h5 class='information-text'>• SK kịch Idecaf: Đại Nghĩa, Đình Toàn, Lương thế Thành, Hoàng
                                Anh, Lê Khánh, Xuân Thùy...</h5>
                            <h5 class='information-text'>• SK kịch Hồng Vân: Thanh Thúy, Đức Thịnh, Ốc Thanh Vân, Hòa
                                Hiệp, Bá Thắng, Hoàng Thy...</h5>
                            <h5 class='information-text'>• SK kịch Sài Gòn: Bảo Châu, Trần Tuấn, Tấn Hưng, Đại Ngọc
                                Trâm, Huỳnh Ngân, Việt Hà, Tiết Cương... </h5>
                            <h5 class='information-text'>• SK kịch 5B Võ văn Tần: Lê Phương, Quý Bình, Tuyết Thu, Cát
                                Tường, Lê Bê La...</h5>
                            <h5 class='information-text'>• Những nghệ sỹ hoạt động tự do: Kiều Oanh, Việt Hương, Thúy
                                Nga, Gia Bảo, Khương Ngọc, Quang Tuấn, Tăng Bảo Quyên, Mai Phương, Minh Béo...</h5>
                            <h5 class='information-text'></h5>

                            <div class='load-more-instructor-profile-wrapper' style='margin-top: 20px;'>
                                <a class='link-text load-more-instructor-profile' style='cursor: pointer'>
                                    <b>Xem chi tiết</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='bottom-right'>
                    <div class='rec-div-holder' id='edumall.detail.right.middle'></div>
                    <div class='tag-cloud'>
                        <h3 class='view-title'>Từ khóa liên quan</h3>

                        <div class='inner'>
                            <a href='../search/luy%e1%bb%87n-gi%e1%bb%8dng-n%c3%b3i.html'>luyện giọng nói</a>
                            <a href='../search/luy%e1%bb%87n-gi%e1%bb%8dng.html'>luyện giọng</a>
                            <a href='../search/luy%e1%bb%87n-ph%c3%a1t-%c3%a2m.html'>luyện phát âm</a>
                            <a href='../search/luy%e1%bb%87n-h%c6%a1i-b%e1%bb%a5ng.html'>luyện hơi bụng</a>
                            <a href='../search/tr%e1%ba%a7n-nam-anh.html'>Trần Nam Anh</a>
                        </div>
                    </div>
                    <div class='social-buttons'>
                        <p>CHIA SẺ</p>
                        <a class='btn social-button' href='#' id='facebook-share-button' style='font-size:48px;'>
                            <i class='fa fa-facebook-square'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?= $this->element('Popup/cart');?>
