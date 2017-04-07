<footer class='container-fluid' id='footer'>
    <div class='row'>
        <div class='container'>
            <div class='top-footer'>
                <div class='row'>
                    <div class='col-sm-3 block-footer'>
                    </div>
                    <div class='col-sm-3 block-footer'>
                        <ul class='footer-link'>
                            <li>
                                <a href='about.html'>Giới thiệu về Babylons</a>
                            </li>
                            <li>
                                <a href='faq.html'>Câu hỏi thường gặp</a>
                            </li>
                            <li>
                                <a href='terms.html'>Điều khoản sử dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div class='col-sm-3 block-footer contact'>
                        <p>
                            <i aria-hidden='true' class='fa fa-phone'></i>
                            <span>1800.6816 (Miễn phí)</span>
                        </p>

                        <p>(7h00 - 22h00 các ngày trong tuần)</p>

                        <p>
                            <i aria-hidden='true' class='fa fa-envelope'></i>
                            <span>cskh@edumall.vn</span>
                        </p>
                    </div>
                    <div class='col-sm-3 block-footer social'>
                        <p>
                            <a href='https://www.facebook.com/Edumall.vn'>
                                <i aria-hidden='true' class='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCB_VcFxP7DeZR8Xfpqf9x5A'>
                                <i aria-hidden='true' class='fa fa-youtube-square'></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div class='bot-footer'>
                <p>© 2016 Edumall. All rights reserved</p>
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
<noscript id='asyncronize-font'>
    <link href='http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel='stylesheet'
          type='text/css'>
</noscript>
<script>
    var loadAsyncronizeFont = function () {
        var addFontNode = document.getElementById("asyncronize-font");
        var replacement = document.createElement("div");
        replacement.innerHTML = addFontNode.textContent;
        document.body.appendChild(replacement)
        addFontNode.parentElement.removeChild(addFontNode);
    };
    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
            webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(function () {
        window.setTimeout(loadAsyncronizeFont, 0);
    });
    else window.addEventListener('load', loadAsyncronizeFont);
</script>