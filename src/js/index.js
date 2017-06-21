console.log('Hello, github');

var el = document.querySelector('.main');


const reset = () => {
    el.scrollLeft = 400;
    el.scrollTop = 400;
};

reset();
el.addEventListener('touchstart', reset);