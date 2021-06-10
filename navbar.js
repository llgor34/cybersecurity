const button = document.querySelector('.responsebutton');
const navlinks = document.querySelector('.linksholder');
const navbar = document.querySelector('.nav-bar');

button.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});


window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 100) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
    }
});

