window.addEventListener('load', () => {
    const head = document.getElementsByTagName('head').item(0);
    const loadScript = (url) => {
        let script = document.createElement('script');
        script.src = url;
        head.appendChild(script);
    };
    const loadCss = (url) => {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
    };
    loadScript('dist/js/index.js');
    loadCss('dist/css/index.css');
});