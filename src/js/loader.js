import isIOS from './utils/isIOS';
import {preventDefault, addEventListener, removeEventListener, Fix} from './bouncefix/bouncefix';

const doc = document;
const head = doc.getElementsByTagName('head').item(0);
const createEl = (tagName) => doc.createElement(tagName);
const appendHead = (el) => head.appendChild(el);
const loadScript = (url) => {
    let script = createEl('script');
    script.src = url;
    appendHead(script);
};
const loadCss = (url) => {
    let link = createEl('link');
    link.rel = 'stylesheet';
    link.href = url;
    appendHead(link);
};

const main = () => {
    if(isIOS()) {
        addEventListener(doc, 'touchstart', preventDefault);
    }

    //页面内嵌加载逻辑
    window.addEventListener('load', () => {
        if(isIOS()) {
            removeEventListener(doc, 'touchstart', preventDefault);
            Fix('main');
        }
        loadScript('dist/js/index.js');
        loadCss('dist/css/index.css');
    });
};

main();
