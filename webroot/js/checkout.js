$(document).ready(function () {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+',000 VND';
    }

    $('.soluong').bind( "keyup change", (function(){
        var khoahocId = $(this).data('khoahoc_id');
        var gia = $(this).data('gia');
        var soLuong = +$(this).val();
        $('#soluong-'+khoahocId).val($(this).val());
        var tongGiaMoi = soLuong*gia;
        $('.course_price .price').text(numberWithCommas(tongGiaMoi));
        $('#total_cost_item-'+khoahocId).val(tongGiaMoi);

        var totalCost = 0;
        $(".total_cost_item").each(function( index ) {
            totalCost += +$(this).val();
        });

        $('.total_cost_number').text(numberWithCommas(totalCost));
    }));
});