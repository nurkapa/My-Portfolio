let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active')
}

let section = document.querySelectorAll('section');
let navList  = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navList.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a[href*=' + id +']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};


ScrollReveal({ 
    distance: '90px',
    duration: 3000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, heading', {origin: 'button'});
ScrollReveal().reveal('.about-img, .skill-content p', {origin: 'left'});
ScrollReveal().reveal('.about-content p, .about-content h3, .skill-content h3', {origin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['Design Graphic', 'UI/UX Design'],
    typedSpeed: 90,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
}); 