$(document).ready(function () {
    renderGia($('.ve:checked'));

    $('.ve').click(function(){
        renderGia($(this));
    });

    function renderGia($gia) {
        var veRenhatId = $gia.val();
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

    $('.cart-button').click(function(){
        var veSelectorId = $('.ve:checked').val();
        var veRenhatSel = $('#'+veSelectorId);
        var veId = veRenhatSel.data('ve_id');
        var khoahocId = veRenhatSel.data('khoahoc_id');
        var gia = (veRenhatSel.data('giakhuyenmai')) ? veRenhatSel.data('giakhuyenmai') : veRenhatSel.data('giathuong');

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
});
