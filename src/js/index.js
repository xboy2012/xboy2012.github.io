console.log('Hello, github');

var el = document.querySelector('.main');


const reset = () => {
    el.scrollLeft = 400;
    el.scrollTop = 400;
};

reset();
el.addEventListener('touchstart', reset);

import isIOS from './utils/isIOS';
import bouncefix from 'bouncefix.js/dist/bouncefix';


if(isIOS())
    bouncefix.add('main');