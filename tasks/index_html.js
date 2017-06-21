import gulp from 'gulp';
import pug from 'gulp-pug';
import dom from 'gulp-dom';
import htmlmin from 'gulp-htmlmin';
import {ROOT_DIR} from './core/consts';
import {appName, icon, splash} from '../src/js/manefest';

gulp.task('index_html', () => {
    gulp.src(`${ROOT_DIR}/src/pug/index.pug`)
        .pipe(
            pug()
        )
        .pipe(
            dom(function() {
                const document = this;
                let head = document.querySelector('head');

                const createTag = (tagName, attributes) => {
                    let tag = document.createElement(tagName);
                    for(let name in attributes) {
                        if(!attributes.hasOwnProperty(name))
                            continue;
                        tag.setAttribute(name, attributes[name]);
                    }
                    return tag;
                };

                const createTitle = () => {
                    let title = document.createElement('title');
                    title.innerHTML = appName;
                    return title;
                };

                head.appendChild(createTitle());
                head.appendChild(createTag('link', {rel:"icon", sizes:"192x192", href: icon}));
                head.appendChild(createTag('link', {rel:'apple-touch-icon', href: icon}));
                head.appendChild(createTag('link', {rel:'apple-touch-startup-image', href: splash}));
                head.appendChild(createTag('link', {rel:"manifest", href:"/dist/json/manifest.json"}));
                head.appendChild(createTag('meta', {name:'apple-mobile-web-app-title', content:appName}));
                head.appendChild(createTag('meta', {name:'apple-mobile-web-app-capable', content:"yes"}));
                head.appendChild(createTag('meta', {name:"mobile-web-app-capable", content:"yes"}));
                head.appendChild(createTag('meta', {name:"viewport", content:"user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"}));
                //head.appendChild(createTag('meta', {name:"apple-mobile-web-app-status-bar-style", content:"black"}));

                let html = document.querySelector('html');
                html.setAttribute('manifest', '/dist/appcahce/index.manifest');

                return document;
            })
        )
        .pipe(
            htmlmin({
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            })
        )
        .pipe(
            gulp.dest(`${ROOT_DIR}/dist/html`)
        )
});