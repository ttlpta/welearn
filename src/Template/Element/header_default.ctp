<div class='banner_crosssell' id='top_header'></div>
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
                <div class='logo'>
                <?=$this->Html->image('logo2.png', ['alt' => 'Edumall Logo', 'class' => "logo-medium"])?>
                <?=$this->Html->image('logo2.png', ['alt' => 'Logo small', 'class' => "logo-small"])?>
                </div>
            </div>
        </div>
    </div>
    </div>
</header>