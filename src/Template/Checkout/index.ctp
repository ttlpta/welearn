<div class='cart container' style='overflow: hidden;z-index: -1'>
    <div class='cart_detail'>
        <div class='cart_detail_box'>
            <div class='cart_detail_box-left'>
                <div class='title'>
                    Thông tin khách hàng
                </div>
                <div class='information'>
                    <form id='cart_form' method='post'>
                        <?php if ($giohang && $giohang['khoahoc']) { ?>
                            <?php foreach ($giohang['khoahoc'] as $item): ?>
                                <input type="hidden" name="donhang[<?= $item['id'] ?>][khoahoc_id]"
                                       value="<?= $item['id'] ?>"/>
                                <input type="hidden" name="donhang[<?= $item['id'] ?>][ve_id]"
                                       value="<?= $item['ve_id'] ?>"/>
                                <input type="hidden" name="donhang[<?= $item['id'] ?>][soluong]"
                                       id="soluong-<?= $item['ve_id'] ?>" value="1"/>
                                <input type="hidden" name="donhang[<?= $item['id'] ?>][gia]"
                                       value="<?= $item['gia'] ?>"/>
                            <?php endforeach; ?>
                        <?php } ?>
                        <div class='cart_form_item'>
                            <select class='form-control browser-default danhxung' id='select' name='danhxung'
                                    oninvalid="this.setCustomValidity('Danh xưng không được để trống!')"
                                    oninput="setCustomValidity('')"
                                    required='required' title="Danh xưng không được để trống">
                                <option disabled='' selected='' value=''>Chọn danh xưng</option>
                                <option value='0'>Mr</option>
                                <option value='1'>Mrs</option>
                                <option value='2'>Ms</option>
                            </select>
                        </div>
                        <div class='cart_form_item'>
                            <input class='form-control name' name='ten' placeholder='Tên đầy đủ' required='required'
                                   oninvalid="this.setCustomValidity('Họ tên không được để trống và lớn hơn 6 ký tự!')"
                                   oninput="setCustomValidity('')"
                                   title='Họ tên không được để trống và lớn hơn 6 ký tự!' type='text'>
                        </div>
                        <div class='cart_form_item'>
                            <input class='form-control mobile' name='dienthoai' placeholder='Số điện thoại'
                                   required='required'
                                   oninvalid="this.setCustomValidity('Số điện thoại không được để trống và chỉ được nhập chữ số!')"
                                   oninput="setCustomValidity('')"
                                   title='Số điện thoại không được để trống và chỉ được nhập chữ số!' type='number'>
                        </div>
                        <div class='cart_form_item'>
                            <input class='form-control email' name='email' placeholder='Email' required='required'
                                   oninvalid="
                                        if(this.validity.typeMismatch){
                                            this.setCustomValidity('Không đúng định dạng email')
                                        } else {
                                            this.setCustomValidity('Email không được để trống!')
                                        }
                                   "

                                   oninput="setCustomValidity('')"
                                   title='Email không được để trống!' type='email'>
                        </div>
                        <div class='cart_form_item'>
                            <input class='form-control address' name='namsinh' placeholder='Năm sinh'
                                   oninvalid="this.setCustomValidity('Bạn phải nhập năm sinh!')"
                                   oninput="setCustomValidity('')"
                                   required='required' title='Bạn phải nhập năm sinh!' type='text'>
                        </div>
                        <div class='cart_form_item'>
                            <div class='form-group'>
                                <select class='form-control browser-default city' id='select' name='khuvuc'
                                        oninvalid="this.setCustomValidity('Bạn phải chọn tỉnh/ thành phố!')"
                                        oninput="setCustomValidity('')"
                                        required='required' title='Bạn phải chọn tỉnh/ thành phố!'>
                                    <option disabled='' selected='' value=''>Chọn Tỉnh / Thành phố</option>
                                    <option value='Hà Nội'>Hà Nội</option>
                                    <option value='TP Hồ Chí Minh'>TP Hồ Chí Minh</option>
                                    <option value='An Giang'>An Giang</option>
                                    <option value='Bà Rịa-Vũng Tàu'>Bà Rịa-Vũng Tàu</option>
                                    <option value='Bạc Liêu'>Bạc Liêu</option>
                                    <option value='Bắc Kạn'>Bắc Kạn</option>
                                    <option value='Bắc Giang'>Bắc Giang</option>
                                    <option value='Bắc Ninh'>Bắc Ninh</option>
                                    <option value='Bến Tre'>Bến Tre</option>
                                    <option value='Bình Dương'>Bình Dương</option>
                                    <option value='Bình Định'>Bình Định</option>
                                    <option value='Bình Phước'>Bình Phước</option>
                                    <option value='Bình Thuận'>Bình Thuận</option>
                                    <option value='Cà Mau'>Cà Mau</option>
                                    <option value='Cao Bằng'>Cao Bằng</option>
                                    <option value='Cần Thơ'>Cần Thơ</option>
                                    <option value='Đà Nẵng'>Đà Nẵng</option>
                                    <option value='Đắk Lắk'>Đắk Lắk</option>
                                    <option value='Đắk Nông'>Đắk Nông</option>
                                    <option value='Điện Biên'>Điện Biên</option>
                                    <option value='Đồng Nai'>Đồng Nai</option>
                                    <option value='Đồng Tháp'>Đồng Tháp</option>
                                    <option value='Gia Lai'>Gia Lai</option>
                                    <option value='Hà Giang'>Hà Giang</option>
                                    <option value='Hà Nam'>Hà Nam</option>
                                    <option value='Hà Tây'>Hà Tây</option>
                                    <option value='Hà Tĩnh'>Hà Tĩnh</option>
                                    <option value='Hải Dương'>Hải Dương</option>
                                    <option value='Hải Phòng'>Hải Phòng</option>
                                    <option value='Hòa Bình'>Hòa Bình</option>
                                    <option value='Hồ Chí Minh'>Hồ Chí Minh</option>
                                    <option value='Hậu Giang'>Hậu Giang</option>
                                    <option value='Hưng Yên'>Hưng Yên</option>
                                    <option value='Khánh Hòa'>Khánh Hòa</option>
                                    <option value='Kiên Giang'>Kiên Giang</option>
                                    <option value='Kon Tum'>Kon Tum</option>
                                    <option value='Lai Châu'>Lai Châu</option>
                                    <option value='Lào Cai'>Lào Cai</option>
                                    <option value='Lạng Sơn'>Lạng Sơn</option>
                                    <option value='Lâm Đồng'>Lâm Đồng</option>
                                    <option value='Long An'>Long An</option>
                                    <option value='Nam Định'>Nam Định</option>
                                    <option value='Nghệ An'>Nghệ An</option>
                                    <option value='Ninh Bình'>Ninh Bình</option>
                                    <option value='Ninh Thuận'>Ninh Thuận</option>
                                    <option value='Phú Thọ'>Phú Thọ</option>
                                    <option value='Phú Yên'>Phú Yên</option>
                                    <option value='Quảng Bình'>Quảng Bình</option>
                                    <option value='Quảng Nam'>Quảng Nam</option>
                                    <option value='Quảng Ngãi'>Quảng Ngãi</option>
                                    <option value='Quảng Ninh'>Quảng Ninh</option>
                                    <option value='Quảng Trị'>Quảng Trị</option>
                                    <option value='Sóc Trăng'>Sóc Trăng</option>
                                    <option value='Sơn La'>Sơn La</option>
                                    <option value='Tây Ninh'>Tây Ninh</option>
                                    <option value='Thái Bình'>Thái Bình</option>
                                    <option value='Thái Nguyên'>Thái Nguyên</option>
                                    <option value='Thanh Hóa'>Thanh Hóa</option>
                                    <option value='Thừa Thiên - Huế'>Thừa Thiên - Huế</option>
                                    <option value='Tiền Giang'>Tiền Giang</option>
                                    <option value='Trà Vinh'>Trà Vinh</option>
                                    <option value='Tuyên Quang'>Tuyên Quang</option>
                                    <option value='Vĩnh Long'>Vĩnh Long</option>
                                    <option value='Vĩnh Phúc'>Vĩnh Phúc</option>
                                    <option value='Yên Bái'>Yên Bái</option>
                                </select>
                            </div>
                        </div>
                        <div class='cart_form_item'>
                            <textarea name="lydobiet" class='form-control' placeholder='Lý do bạn biết đến chúng tôi'
                                      oninvalid="this.setCustomValidity('Lý do bạn biết đến chúng tôi!')"
                                      oninput="setCustomValidity('')"
                                      required='required'></textarea>
                        </div>
                        <div class='cart_form_item'>
                            <select class='form-control browser-default' id='select' name='datungthamgia'
                                    oninvalid="this.setCustomValidity('Không được để trống!')"
                                    oninput="setCustomValidity('')"
                                    required='required' title="Không được để trống">
                                <option disabled='' selected='' value=''>Bạn đã từng tham gia khóa học của chúng tôi?
                                </option>
                                <option value='0'>Chưa</option>
                                <option value='1'>Đã từng tham gia</option>
                            </select>
                        </div>
                        <div class='cart_form_item khoahoctungthamgia' style="display:none">
                            <input class='form-control address' name='khoahoctungthamgia' placeholder='Các khóa học bạn từng tham gia'
                                   title='Các khóa học bạn từng tham gia' type='text'>
                        </div>
                        <div class='cart_form_item'>
                            <input class='form-control address' name='nguoigioithieu' placeholder='Người giới thiệu'
                                   title='Tên người giới thiệu bạn tới chương trình học của chúng tôi' type='text'>
                        </div>
                        <div class='cart_form_submit'>
                            <input class='btn btn-success btn-raised btn-lg btn_purchase_cod btn_purchase_cod_organic'
                                   type='submit' value='Đặt mua khóa học'>
                        </div>
                    </form>
                </div>
            </div>
            <div class='cart_detail_box-right'>
                <div class='purchase_information'>
                    <div class='title'>Thông tin thanh toán</div>
                    <?php if ($giohang && $giohang['khoahoc']) { ?>
                        <?php foreach ($giohang['khoahoc'] as $item): ?>
                            <div class='purchase_information_item'>
                                <div class='action_area'>
                                    <div class="remove_course" style="height: 15px;" data-ve_id="<?= $item['ve_id'] ?>">
                                        <button class="close">×</button>
                                    </div>
                                </div>
                                <div class='course_info no-margin'>
                                    <div class='course_name no-padding'><a
                                            href="<?= $this->Url->build('/khoa-hoc/' . $item['id'], true) ?>"><?= $item['ten'] ?></a>
                                        - Vé <b style="text-transform: uppercase"><?= $item['ve_ten'] ?></b>
                                        <input type="hidden" id="total_cost_item-<?= $item['ve_id'] ?>"
                                               class="total_cost_item" value="<?= $item['gia'] ?>"/>
                                    <span style="float:right"><b>x</b>
                                        <input style="max-width: 40px" type="number" class="soluong"
                                               data-gia="<?= $item['gia'] ?>" data-ve_id="<?= $item['ve_id'] ?>"
                                               value="1"/>
                                    </span>
                                    </div>
                                    <div class='course_price no-padding'>
                                        <span class="price-<?=$item['ve_id']?>"><?= gia_daydu($item['gia']) ?></span>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    <?php } else { ?>
                        <div class='purchase_information_item'>
                            <div class='action_area'></div>
                            <div class='course_info no-margin'>
                                <h4>Bạn chưa có khóa học nào trong giỏ hàng. <a href="../tat-ca-khoa-hoc">Quay lại</a>
                                    các khóa học của chúng tôi nào</h4>
                            </div>
                        </div>
                    <?php } ?>
                </div>
                <div class='total_cost no-margin'>
                    <div class='total_cost_text'>Thành tiền</div>
                    <div
                        class='total_cost_number'><?= ($giohang) ? gia_daydu($giohang['tong_tien_khoahoc_dadat']) : 0 ?></div>
                </div>
            </div>
        </div>
    </div>
</div>
<?= $this->Html->script('main2') ?>
<?= $this->Html->script('checkout') ?>