
$('#gnb>li').on('mouseover', function () {
    $('.gnbBg, .sub').stop().slideDown();
});
$('#gnb>li').on('mouseout', function () {
    $('.gnbBg, .sub').stop().slideUp();
});

$('.notice>.content>ul>li').eq(0).on("click", function () {
    $(".popup, .popupBg").show();
});
$('.close').on("click", function () {
    $(".popup, .popupBg").hide();
});

setInterval(function () {
    $('.frame').animate({ 'top': "-300px" },
        function () {
            $('.frame>li').eq(0).appendTo(".frame");
            $('.frame').css({ 'top': 0 })
        })
}, 3000);
