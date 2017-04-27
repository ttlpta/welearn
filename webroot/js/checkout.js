$(document).ready(function () {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+',000 VND';
    }

    $('.soluong').bind( "keyup change", (function(){
        var veId = $(this).data('ve_id');
        var gia = $(this).data('gia');
        var soLuong = +$(this).val();
        $('#soluong-'+veId).val($(this).val());
        var tongGiaMoi = soLuong*gia;
        $('.course_price .price-'+veId).text(numberWithCommas(tongGiaMoi));
        $('#total_cost_item-'+veId).val(tongGiaMoi);

        var totalCost = 0;
        $(".total_cost_item").each(function( index ) {
            totalCost += +$(this).val();
        });

        $('.total_cost_number').text(numberWithCommas(totalCost));
    }));

    $(".remove_course").click(function() {
        var veId = $(this).data('ve_id');
        console.log(window.location.href);
        $.post("../khoa-hoc/xoa-gio-hang", {ve_id: veId}, function(data, status){
            var dataObj = JSON.parse(data);
            if(dataObj.success)
                window.location.reload();
        });
    });

    $(".cart_form_item #select").change(function(){
        (+$(this).val()) ? $('.cart_form_item.khoahoctungthamgia').show() : $('.cart_form_item.khoahoctungthamgia').hide();
    });
});