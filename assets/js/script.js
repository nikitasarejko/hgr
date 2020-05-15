$('p#one').on('click', function(){
    $('div.active').removeClass('active');
    $('div.red').addClass('active');
});

$('p#two').on('click', function(){
    $('div.active').removeClass('active');
    $('div.blue').addClass('active');
});