$(document).ready(function () {
    renderGia($('.ve:checked'));

    $('.ve').click(function(){
        renderGia($(this));
    });

    function renderGia($gia) {
        var veRenhatId = format_to_element_id($gia.val());
        var veRenhatSel = $('#'+veRenhatId);
        var veRenhatGiaThuong = veRenhatSel.data('giathuong');
        var veRenhatGiaKhuyenMai = veRenhatSel.data('giakhuyenmai');
        if (veRenhatGiaKhuyenMai) {

            $('.course-price #giaChinhThuc').text(numberWithCommas(veRenhatGiaKhuyenMai));
            $('.course-price .linethrough #giaCu').text(numberWithCommas(veRenhatGiaThuong));
        } else {
            $('.course-price #giaChinhThuc').text(veRenhatGiaThuong);
            $('.course-price .linethrough').hide();
        }
        $('.course-wishlist .quyenloi').hide();
        $('.course-wishlist #quyenloi-'+veRenhatId).show();
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+',000';
    }

    function format_to_element_id(x) {
        return x.replace(/ /g,"_");
    }

    $('.cart-button').click(function(){
        var veSelectorId = format_to_element_id($('.ve:checked').val());
        var veRenhatSel = $('#'+veSelectorId);
        var veId = veRenhatSel.data('ve_id');
        var khoahocId = veRenhatSel.data('khoahoc_id');

        var data = {
            ve_id : veId,
            khoahoc_id : khoahocId
        };

        $.post("them-gio-hang", data, function(data, status){
            var dataObj = JSON.parse(data);
            if(dataObj.success) {
                var carts = dataObj.data;
                var khoahocs = carts.khoahoc;
                var khoahocMoinhat = khoahocs[khoahocs.length - 1];
                $("#cartModal .course_title").text(khoahocMoinhat.ten);
                $("#cartModal .course_image img").attr("src", '../webroot/uploads/khoahoc/'+khoahocMoinhat.anh);
                $("#cartModal .total_price-number").text(numberWithCommas(carts.tong_tien_khoahoc_dadat)+' VND');
            } else {
                $("#cartModal .total_price-number").text(numberWithCommas(dataObj.tong_tien_khoahoc_dadat)+' VND');
            }

            $("#cartModal").modal("show")
        }).fail(function() {

        });
    });

    $(".remove_course").click(function() {
        var veIdSelector = $('.ve:checked').val();
        var veSelData = $('#'+veIdSelector);
        var veId = veSelData.data('ve_id');

        $.post("xoa-gio-hang", {ve_id: veId}, function(data, status){
            window.location.reload();
        }).fail(function() {
            window.location.reload()
        });
    });

    $(".purchase-submit").click(function() {
        var veSelectorId = format_to_element_id($('.ve:checked').val());
        var veRenhatSel = $('#'+veSelectorId);
        var veId = veRenhatSel.data('ve_id');
        var khoahocId = veRenhatSel.data('khoahoc_id');

        var data = {
            ve_id : veId,
            khoahoc_id : khoahocId
        };

        $.post("them-gio-hang", data, function(data, status){
            var dataObj = JSON.parse(data);
            if(dataObj.success) {
                window.location = "../thanh-toan";
            } else {
                alert('Có lỗi xảy ra, xin mời đặt mua lại một lần nữa');
            }
        });
    })
});
