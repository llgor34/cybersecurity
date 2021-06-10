/* Needed variables */
const container = document.querySelector('.container');

const aboutus = document.querySelector('[about-us]');
const movie = document.querySelector('[movie]');


/* Event listeners */

movie.addEventListener('click', () => {
    prepareContainer();

    setTimeout(getText('index.html'), 500);
    localStorage.setItem('whichpage', 'main');
});

aboutus.addEventListener('click', () => {
    prepareContainer();

    setTimeout(getText('onas.html'), 500);
    localStorage.setItem('whichpage', 'aboutus');
});


/* Fetchs requested file */

function getText(direction) {

    fetch('http://localhost/kampaniaNEW/fetch/'+direction)
    .then(res => res.text())
    .then(res => {
        container.innerHTML = res;
    });
}

/* Clears container using animation */

function prepareContainer() {
    container.classList.add('destructor');
    setTimeout(function() {
        container.classList.remove('destructor');
    }, 1000);
}