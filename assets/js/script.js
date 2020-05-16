$('p#one').on('click', function(){
    $('div.active').removeClass('active');
    $('div.red').addClass('active');
});

$('p#two').on('click', function(){
    $('div.active').removeClass('active');
    $('div.blue').addClass('active');
});

// const divs = document.querySelectorAll('div.team__left__name');
// const imageHolder = document.querySelector('div.team__right__image');

// divs.forEach(div => {
//     const idHolder = div.getAttribute("data-url");  
//     console.log(idHolder);

//     div.addEventListener("click", function() {
//         imageHolder.style.backgroundImage = 'url(' + idHolder + ')'
//     })

// })

// const divs = document.querySelectorAll('div.team__left__name');
// const imageBox = document.querySelector('div.team__right__image');

// divs.forEach(div => {
//     const idHolder = div.getAttribute('data-profile-image');
//     const imageHolder = document.getElementById(idHolder);

//     div.addEventListener("click", function() {
//         if (imageBox.classList.contains("visible")) {
//             imageBox.classList.remove("visible")
//         }

//             imageHolder.classList.add("visible");

//     })

//     console.log(idHolder);
// })

const teamNames = document.querySelectorAll('div.team__left__name');

teamNames.forEach(teamName => {
    const idHolder = teamName.getAttribute('data-profile-image');
    const imageBox = document.getElementById(idHolder);

    teamName.addEventListener("click", function() {
        imageBox.classList.add('visible');
        console.log(imageBox);
    })
    
})