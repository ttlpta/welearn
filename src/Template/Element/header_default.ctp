<!-- Header -->
<header>
    <div class='header-inner rel'>
    <div class='container-fluid'>
        <div class='header-col header-col-left'>
            <div class='hd-categories pull-left'>
                <div class='btn-group cats-dropdown'></div>
            </div>
        </div>
        <div class='header-col header-col-mid'>
            <div class='hd-brand'>
                <div class='logo' onclick="window.location='<?=$this->Url->build('/', true);?>'">
                <?=$this->Html->image('logo.png', ['alt' => 'Logo', 'class' => "logo-medium", "style" => "height: 55px;"])?>
                </div>
            </div>
        </div>
        <div class='header-col text-right header-col-right'>
            <div class='hd-user'>
                <div>
                    <div class='btn-group cart-notification-dropdown hidden-xs hidden-sm'>
                        <div aria-expanded='false' class='dropdown-toggle cart-dropdown-button' data-toggle='dropdown' type='button'>
                            <div class='cart-notification'>
                                <div class='cart-notification-button'>
                                    <?=$this->Html->image('shopping-cart-header.png');?>
                                    <?php if($giohang) {?>
                                        <span class='badge cart_count'><?=count($giohang['khoahoc'])?></span>
                                    <?php } ?>

                                </div>
                            </div>
                        </div>
                        <?php if(!$giohang){?>
                        <div aria-labelledby='dropdownNotification' class='dropdown-menu cart-dropdown-notification'>
                            <h4 class='emty-carts-notice'>Bạn chưa có khoá học nào trong giỏ</h4>
                        </div>
                        <?php } else { ?>
                        <div aria-labelledby='dropdownNotification' class='dropdown-menu cart-dropdown-notification'>
                            <div class='row no-margin courses'>
                                <?php foreach($giohang['khoahoc'] as $ve):?>
                                <div class='course'>
                                    <div class='course_image'>
                                        <img src="<?=$this->Url->build('/', true).DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$ve['anh'] ?>" />
                                    </div>
                                    <div class='course_info'>
                                        <div class='course_title'><?=$ve['ten']?> - Vé <b style="text-transform: uppercase"><?=$ve['ve_ten']?></b></div>
                                        <div class='course_price'><?=gia_daydu($ve['gia'])?></div>
                                    </div>
                                    <div class='remove_course'>
                                        <input class='course_id' type='hidden' value='56a71be4d8b7314364000017'>
                                        <button class='close'>×</button>
                                    </div>
                                </div>
                                <?php endforeach;?>
                            </div>
                            <div class='row no-margin total_price'>
                                <div class='col-xs-6 no-padding'>
                                    <div class='total_price_text'>Tổng tiền</div>
                                </div>
                                <div class='col-xs-6 no-padding'>
                                    <div class='total_price_number'><?=($giohang) ? gia_daydu($giohang['tong_tien_khoahoc_dadat']) : 0?></div>
                                </div>
                            </div>
                            <div class='row no-margin purchase'>
                                <a href='users/sign_in.html'>Đặt mua khoá học</a>
                            </div>
                        </div>
                        <?php } ?>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
</header>