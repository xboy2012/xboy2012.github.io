import dom from 'gulp-dom';

export default () => dom(
    function() {
        const document = this;
        let html = document.querySelector('html');
        html.setAttribute('manifest', '/dist/appcache/index.manifest');
        return document;
    });