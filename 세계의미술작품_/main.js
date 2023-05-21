$('#gnb>li').on('mouseover', function () {
    $(this).children('.sub').stop().slideDown();
});
$('#gnb>li').on('mouseout', function () {
    $(this).children('.sub').stop().slideUp();
});

$('.notice>.content>ul>li').eq(0).on("click", function () {
    $('.popup').show();
});
$('#close').on("click", function () {
    $('.popup').hide();
});

setInterval(function () {
    $('.frame').animate({ 'top': "-300px" },
        function () {
            $('.frame>li').eq(0).appendTo(".frame");
            $('.frame').css({ 'top': 0 })
        })
}, 3000);