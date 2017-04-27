<?php
/**
  * @var \App\View\AppView $this
  */
?>
<?=$this->element('left-sidebar')?>
<div class="donhang form large-9 medium-8 columns content">
    <?= $this->Form->create($donhang) ?>
    <fieldset>
        <legend><?= __('Add Donhang') ?></legend>
        <div class="input text">
            <label>Khách hàng mới</label>
            <input id="kieu-khachhang" type="checkbox" name="khachhang-moi" value="1"/>
        </div>
        <div id="khach-hang-moi" style="display:none">
        <div class='input text required'>
            <label>Danh xưng</label>
            <select class='form-control browser-default danhxung' id='select' name='danhxung'
                    title="Danh xưng không được để trống">
                <option value='0'>Mr</option>
                <option value='1'>Mrs</option>
                <option value='2'>Ms</option>
            </select>
        </div>
        <div class='input text required'>
            <label>Tên đầy đủ</label>
            <input class='form-control name' name='ten' placeholder='Tên đầy đủ' 
                    title='Họ tên không được để trống và lớn hơn 6 ký tự!' type='text'>
        </div>
        <div class='input text required'>
            <label>Số điện thoại</label>
            <input class='form-control mobile' name='dienthoai' placeholder='Số điện thoại' type='number'>
        </div>
        <div class='input text required'>
            <label>Email</label>
            <input class='form-control email' name='email' placeholder='Email' type='email'>
        </div>
        <div class='input text required'>
            <label>Năm sinh</label>
            <input class='form-control address' name='namsinh' type='text'>
        </div>
        <div class='input text required'>
            <label>Lý do biết</label>
            <input class='form-control address' name='lydobiet' type='text'>
        </div>
        <div class='input text required'>
            <div class='form-group'>
                <label>Thành phố</label>
                <select class='form-control browser-default city' id='select' name='khuvuc'>
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
        <div class='input text required'>
            <label>Đã từng tham gia</label>
            <select class='form-control browser-default' id='select' name='datungthamgia'>
                <option value='0'>Chưa</option>
                <option value='1'>Đã từng tham gia</option>
            </select>
        </div>
        <div class='input text khoahoctungthamgia' style="display:none">
            <label>Khóa học từng tham gia</label>
            <input class='form-control address' name='khoahoctungthamgia' placeholder='Các khóa học bạn từng tham gia'
                    title='Các khóa học bạn từng tham gia' type='text'>
        </div>
        <div class='input text'>
            <label>Người giới thiệu</label>
            <input class='form-control address' name='nguoigioithieu' placeholder='Người giới thiệu'
                    title='Tên người giới thiệu bạn tới chương trình học của chúng tôi' type='text'>
        </div>
        </div>
        <?php
            echo $this->Form->control('khachhang_id', ['options' => $khachhang, 'id' => 'khach-hang-cu']);
            echo $this->Form->control('ve_id', ['options' => $ve]);
            echo $this->Form->control('soluong');
            echo $this->Form->control('note', ['type' => 'textarea']);
        ?>
        <div class="input required">
            <label for="trangthai">Trạng thái</label>
            <select name="trangthai">
                <option value="0">Chưa gọi điện</option>
                <option value="1">Chờ thanh toán</option>
                <option value="2">Đã thanh toán</option>
            </select>
        </div>
    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>
</div>
<script>
$(document).ready(function () {
    $('#kieu-khachhang').click(function(){
        $('#khach-hang-moi').toggle();
        $('#khach-hang-cu').parent().toggle();
    });
});
</script>