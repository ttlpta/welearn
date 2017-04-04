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
                        <a href='#author'>Giảng viên</a>
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
                    <h3 class='course-price-text no-margin bold' style='margin: 0; padding-top: 10px'><?= ($veReNhat->gia_khuyenmai) ? gia_daydu(($veReNhat->gia_khuyenmai)) : gia_daydu($veReNhat->gia_thuong)?></h3>
                </li>
            </ul>
        </div>
        <!-- + Detail content -->
        <div class='detail'>
            <div class='detail-top'>
                <div class='detail-top-content'>
                    <h1 class='course-title'><?=$course->ten?></h1>

                    <div class='sub-title'><?=$course->mieutangan?></div>
                    <div class='course-rating'>
                        <div class='course-rating-people'><?=$course->luotxem?> người đã xem</div>
                    </div>
                    <div class='course-author'>
                        Giảng dạy bởi :
                        <?php foreach($tacgias as $tacgia):?>
                            <a class='link-text normal-text' href='<?=$this->Url->build('/tacgia/'.$tacgia->id, true);?>' target='_blank'>
                            <?=$tacgia->ten?>
                            </a>
                        <?php endforeach?>
                    </div>
                    <div class='course-detail'>
                        <div class='course-player'>
                            <div class='video-container no-controls'>
                                <iframe allowfullscreen='' frameborder='0' height='100%'
                                        src='https://www.youtube.com/embed/<?=$course->video_youtube?>?ecver=2'
                                        style='min-height:345px' width='100%'></iframe>
                            </div>
                        </div>
                        <div class='course-detail-bottom'>
                            <div class='course-detail-bottom-left'>
                                <div class='course-price'>
                                    <div class='course-price-text no-margin bold' style="font-size: 20px;word-spacing: 5px;">
                                        <?php foreach($ves as $ve):?>
                                        <input type="radio" name="ve" class="ve" value="<?=$ve->ten?>" <?=($veReNhat->id == $ve->id)? 'checked' : ''?>/>
                                        <input type="hidden" id="<?=format_to_element_id($ve->ten)?>"
                                               data-ve_id="<?=$ve->id?>"
                                               data-khoahoc_id="<?=$course->id?>"
                                               data-giathuong="<?=$ve->gia_thuong?>"
                                               data-giakhuyenmai="<?=$ve->gia_khuyenmai?>" />
                                        <label style="text-transform: uppercase;"><?=$ve->ten?></label>&nbsp;
                                        <br />
                                        <?php endforeach?>
                                    </div>
                                </div>
                                <div class='course-price'>
                                    <h3 class='course-price-text no-margin bold'>
                                        <span id="giaChinhThuc"></span> VNĐ
                                        <span class="linethrough"><span id="giaCu"></span> VNĐ</span>
                                    </h3>
                                </div>
                                <div class='course-purchase'>
                                    <div class='purchase-submit'>
                                        <a class='btn btn-raised btn-lg buy-button'
                                           href='javascript:void(0)'>
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
                                </div>
                            </div>
                            <div class='course-detail-bottom-right'>
                                <div class='course-wishlist' style="min-height: 300px;"> <h4>Bạn sẽ nhận được : </h4>
                                    <?php foreach($ves as $ve):?>
                                        <div class="quyenloi" id="quyenloi-<?=$ve->ten?>">
                                            <?=$ve->quyenloi?>
                                        </div>
                                    <?php endforeach;?>
                                </div>
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
                                <h5 style='font-weight: 500;'><?=$course->mieutangan?></h5>
                            </div>
                            <div class='row no-margin' id='short-description-container'>
                                <div id='short-description'>
                                    <?=$course->noidung?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='author'>
                        <div class='author-title'>Tiểu sử tác giả</div>
                        <?php foreach($tacgias as $tacgia):?>
                        <div class='author-content'>
                            <div class='author-avatar'>
                                <img src="<?=$this->Url->build('/'.DIR_UPLOAD_IMAGE_TACGIA.'/'.$tacgia->anh, true)?>"/>
                            </div>
                            <div class='author-description'>
                                <div class='no-margin'></div>
                                <a class='author-title' href='#!' style='color: #464646;'>
                                    <span style='font-size:14px'></span>
                                    <a href='<?=$this->Url->build('/tacgia/'.$tacgia->id, true)?>'
                                       style='float:left; font-weight:bold; font-size:20px;' target='_blank'>
                                       <?=$tacgia->ten?>
                                    </a>
                                </a>
                            </div>
                        </div>
                        <div class='author-information'>
                            <?=$tacgia->mieuta?>
                        </div>
                        <?php endforeach ?>
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
<?= $this->Html->script('main2'); ?>
<?= $this->Html->script('custom'); ?>
<?= $this->element('Popup/cart', ['khoahoc' => $course]);?>