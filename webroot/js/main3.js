$(document).ready(function () {
    $(".show-all").click(function (e) {
        e.preventDefault();
        var t = $(this).parent().next().next(".list-course-card"), n = $("body").hasClass("es-template") ? "590px" : "295px";
        console.log("Height:" + n), "visible" == t.css("overflow") ? ($(this).html("Xem t\u1ea5t c\u1ea3 <i class='fa fa-plus-circle'></i>"), t.css({
            height: n,
            overflow: "hidden"
        })) : ($(this).html("Thu g\u1ecdn <i class='fa fa-minus-circle'></i>"), t.css({
            height: "auto",
            overflow: "visible"
        }))
    });

    $(".load-more").click(function () {
        "none" == $("#long-description-container").css("display") ?
            ($("#long-description-container").css("display", "block"), $("#short-description-container").css("display", "none"),
                $(this).text("Thu g\u1ecdn")) : ($("#long-description-container").css("display", "none"), $("#short-description-container").css("display", "block"), $(this).text("Xem chi ti\u1ebft"))
    });

    $(".link-text.load-more-instructor-profile").click(function () {
        $("h5.information-text").css("display", "block"), $(".link-text.load-more-instructor-profile").css("display", "none")
    });
});