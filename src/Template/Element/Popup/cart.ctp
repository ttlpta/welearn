<div aria-labelledby='myModalLabel' class='modal fade' id='cartModal' role='dialog' tabindex='-1'>
    <div class='modal-dialog' role='document'>
        <div class='modal-content'>
            <div class='modal-header'>
                <button aria-label='Close' class='close' data-dismiss='modal' type='button'>
                    <span aria-hidden='true'>×</span>
                </button>
                <div class='modal-title pull-left' id='myModalLabel'>
                    <?= $this->Html->image('shopingcart-icon.png', ['alt' => 'Shopingcart icon']) ?>
                    <span>Bạn đã thêm 1 khoá học vào giỏ hàng</span>
                </div>
            </div>
            <div class='modal-body'>
                <div class='row no-margin courses'>
                    <div class='col-xs-3 no-padding course_image'>
                        <?= $this->Html->image($this->Url->build('/'.DIR_UPLOAD_IMAGE_KHOAHOC.'/'.$khoahoc->anh, true), ['alt' => 'Shopingcart icon']) ?>
                    </div>
                    <div class='col-xs-7 course_info'>
                        <h4 class='course_title'><?=$khoahoc->ten?></h4>
                        <div class='remove_course'>
                            <a href="javascript:void(0)">Bỏ chọn khoá học</a>
                        </div>
                    </div>
                    <div class='col-xs-2 course_price'></div>
                </div>
                <div class='row no-margin payment'>
                    <div class='continue-shopping col-xs-3 no-padding'>
                        <a class='pull-left' data-dismiss='modal' type='button'>
                            <i class='fa fa-caret-left'></i>
                            Tiếp tục mua hàng
                        </a>
                    </div>
                    <div class='cart_info col-xs-4 col-xs-offset-1 no-padding'>
                        <h4 class='pull-right carts_total'></h4>
                    </div>
                    <div class='payment_info col-xs-4 no-padding'>
                        <div class='price row no-margin pull-right'>
                            <h4 class='total_price-number'></h4>
                            <h4 class='total_price-text'>(Tổng số tiền thanh toán)</h4>
                        </div>
                        <div class='purchase row no-margin'>
                            <div class='col-xs-12 no-padding'>
                                <a class='btn btn-default btn-purchase' href='<?=$this->Url->build('/thanh-toan', true)?>'>
                                    <i class='fa fa-shopping-cart'></i>
                                    Thanh toán
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>