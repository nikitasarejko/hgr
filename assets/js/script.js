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

const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards cubic-bezier(0.23, 1, 0.32, 1)`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })

})

images.forEach(image => {
    observer.observe(image)
})

const portraits = document.querySelectorAll("div.portraitwrapper")
const referenzen = document.querySelectorAll("div.referenzen-objekt-grid__image")

imageObserver = new IntersectionObserver((imageEntries) => {

    imageEntries.forEach(imageEntry => {
        if(imageEntry.intersectionRatio >= 0.1) {
            imageEntry.target.classList.add("in-view")
        }
        else {
            imageEntry.target.classList.remove("in-view")
        }
    })
}, {
    threshold: [0, 0.1, 1]
})

portraits.forEach(portrait => {
    imageObserver.observe(portrait)
})

referenzen.forEach(referenz => {
    imageObserver.observe(referenz)
})