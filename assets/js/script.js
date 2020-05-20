// $('p#one').on('click', function(){
//     $('div.active').removeClass('active');
//     $('div.red').addClass('active');
// });

// $('p#two').on('click', function(){
//     $('div.active').removeClass('active');
//     $('div.blue').addClass('active');
// });

// $('h3.toggle').on('click', function(){
//     $(this).html($(this).html() == 'MORE' ? 'CLOSE' : 'MORE');
//     $('.team-grid__bio').toggleClass('hidden');
// });

$("h3.toggle").click(function(){
    $(this).html($(this).html() == 'INFO' ? 'X' : 'INFO');
    $(this).siblings().nextAll(".team-grid__bio").toggleClass("hidden");
});



$(document).ready(function () {
    $('.team__left__name').click(function () {
        $('.team__left__name.current').removeClass('current');
        $(this).addClass('current');
        $('.team__right__image.visible').removeClass('visible in');
        $('.team__right__image').eq($(this).index()).addClass('visible in');
    });
});
