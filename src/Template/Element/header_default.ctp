<!-- Header -->
<header>
    <div class='header-inner rel'>
    <div class='container-fluid'>
        <div class='header-col header-col-left'>
            <div class='hd-categories pull-left'>
                <div class='btn-group cats-dropdown'></div>
            </div>
            <div class='hd-search pull-left'>
                <div class='search-box' id='atc-search'>
                <form action='https://edumall.vn/search' class='search-form' method='GET'>
                    <input autocomplete='off' class='course-search' id='books-search-txt' name='q' search_api='//edumall.vn/auto_complete' type='text'>
                    <button type='submit'>
                    <i class='fa fa-search'></i>
                    </button>
                </form>
                </div>
                <div class='btn-group search-dropdown'>
                <div aria-expanded='false' aria-haspopup='true' class='dropdown-toggle' data-toggle='dropdown' type='button'>
                    <i class='fa fa-search'></i>
                </div>
                <div class='dropdown-menu'>
                    <div class='search-box'>
                        <div class='search-box' id='atc-search'>
                            <form action='https://edumall.vn/search' class='search-form' method='GET'>
                            <input autocomplete='off' class='course-search' id='books-search-txt' name='q' search_api='//edumall.vn/auto_complete' type='text'>
                            <button type='submit'>
                            <i class='fa fa-search'></i>
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
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
                                </div>
                            </div>
                        </div>
                        <div aria-labelledby='dropdownNotification' class='dropdown-menu cart-dropdown-notification'>
                            <h4 class='emty-carts-notice'>Bạn chưa có khoá học nào trong giỏ</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
</header>