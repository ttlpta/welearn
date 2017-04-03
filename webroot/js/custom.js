$(document).ready(function () {
    $('.ve').click(function(){
        var idGia = $(this).val();
        var giaThuong = $('#'+idGia).data('giathuong');
        var giaKhuyenMai = $('#'+idGia).data('giakhuyenmai');
        console.log(giaThuong);
        console.log(giaKhuyenMai);
    });
});