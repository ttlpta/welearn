<footer class='container-fluid footer-wrap' id='footer'>
    <div class='row'>
        <div class='container'>
            <div class='top-footer'>
                <div class='row'>
                    <div class='col-sm-5 block-footer'>
                        <p>
                            <b>Vui lòng gọi hoặc nhắn tin Hotline</b><br />
                             - Hà Nội <i aria-hidden='true' class='fa fa-phone'></i><span>04 6652 2750/ 0973 934 577</span><br />
                             - TPHCM <i aria-hidden='true' class='fa fa-phone'></i><span>08 6258 5931/ 0902 879 147</span><br />
                            Gọi Hotline trong trang web riêng của mỗi chương trình<br />
                        </p>
                        <br />
                        <p><b>Hoặc email tới</b></p>
                        <p><i aria-hidden='true' class='fa fa-envelope'></i> contact@babylons.com.vn</p>
                        <br />
                        <p><b>Chăm sóc khách hàng/ đánh giá cảm nhận của khách hàng vui lòng email tới</b> </p>
                        <p><i aria-hidden='true' class='fa fa-envelope'></i> customer@babylons.com.vn</p>
                        <br />
                        <p><b>Hợp tác kinh doanh vui lòng email tới</b> </p>
                        <p><i aria-hidden='true' class='fa fa-envelope'></i> lien.nguyen@babylons.com.vn</p>
                    </div>
                    <div class='col-sm-4 block-footer social'>
                        <p>
                            <b>Tại Hà Nội</b><br />
                            P302, Phú Gia Residence, 3 Nguyễn Huy Tưởng, Quận Thanh Xuân<br />
                            <i aria-hidden='true' class='fa fa-phone'></i> (04) 6652 2750<br />
                            <i aria-hidden='true' class='fa fa-envelope'></i> contact@babylons.com.vn
                        </p>
                        <p>
                            <b>Tại TP Hồ Chí Minh</b><br />
                            P301, Block C, The Manor 2, 91 Nguyễn Hữu Cảnh, Quận Bình Thạnh<br />
                            <i aria-hidden='true' class='fa fa-phone'></i> (08) 6258 5931<br />
                            <i aria-hidden='true' class='fa fa-envelope'></i> info.hcm@babylons.com.vn
                        </p>
                        <p>
                            <b>Thời gian làm việc</b><br />
                            Thứ 2 đến thứ 6: Sáng 08h30 - 12h00 / Chiều 13h30 - 18h00<br />
                            Thứ 7: 8h30 - 12h00<br />
                        </p>
                    </div>
                    <div class='col-sm-3 block-footer'>
                        <ul class='footer-link'>
                            <li>
                                <a href='/taitro'>TÀI TRỢ HỘI THẢO</a>
                            </li>
                            <li>
                                <a href='/sachhay'>SÁCH HAY</a>
                            </li>
                            <li>
                                <a href='/hoptac'>TRỞ THÀNH ĐỐI TÁC SALE</a>
                            </li>
                            <li>
                                <a href='/hinhanh'>GALLERY - THƯ VIỆN ẢNH</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class='bot-footer'>
                <p>Copyright © 2016 - Babylons | All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>
<script>
    $(document).ready(function () {
        var list_nav = $('.featured-courses-sm .list ul');
        var course_nav = $('#courses_swipe');
        list_nav.slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            swipe: false
        });
        course_nav.slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            arrows: true,
            adaptiveHeight: true
        });

        swipeDetect(document.getElementById('detect_swipe'), function (dir) {
            if (dir == 'left') {
                list_nav.find('.slick-next').trigger('click');
                course_nav.find('.slick-next').trigger('click');
            } else if (dir == 'right') {
                list_nav.find('.slick-prev').trigger('click');
                course_nav.find('.slick-prev').trigger('click');
            }
        });

        course_nav.on('swipe', function (event, slick, direction) {
            if (direction == 'left') {
                list_nav.find('.slick-next').trigger('click');
            } else {
                list_nav.find('.slick-prev').trigger('click');
            }
        });

        $('.featured-courses-sm .courses a').unbind('click');
    });
</script>
