import document from './loader/document';

import isIOS from './utils/isIOS';
import {preventDefault, addEventListener, removeEventListener, Fix} from './loader/bouncefix';
const head = document.getElementsByTagName('head').item(0);
const createElement = (tagName) => document.createElement(tagName);
const appendHead = (el) => head.appendChild(el);
const loadScript = (url) => {
    let script = createElement('script');
    script.src = url;
    appendHead(script);
};
const loadCss = (url) => {
    let link = createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    appendHead(link);
};



if(isIOS()) {
    addEventListener(document, 'touchstart', preventDefault);
}

//页面内嵌加载逻辑
addEventListener(window, 'load', () => {
    if(isIOS()) {
        removeEventListener(document, 'touchstart', preventDefault);
        Fix('main');
    }
    loadScript('dist/js/index.js');
    loadCss('dist/css/index.css');
});