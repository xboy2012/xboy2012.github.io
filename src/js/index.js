console.log('Hello, github');

var el = document.querySelector('.main');


const reset = () => {
    el.scrollLeft = 1;
    el.scrollTop = 1;
};

reset();
el.addEventListener('touchstart', reset);