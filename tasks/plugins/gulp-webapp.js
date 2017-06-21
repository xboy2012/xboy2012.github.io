import dom from 'gulp-dom';
import {appName, icon, splash} from '../../src/js/manefest';

export default () => dom(
    function() {
        const document = this;
        let head = document.querySelector('head');

        const tag = (tagName, attributes) => {
            let tag = document.createElement(tagName);
            for (let name in attributes) {
                if (!attributes.hasOwnProperty(name))
                    continue;
                tag.setAttribute(name, attributes[name]);
            }
            return tag;
        };

        const link = (attributes) => head.appendChild(tag('link', attributes));
        const meta = (attributes) => head.appendChild(tag('meta', attributes));

        const title = (text) => {
            let title = document.querySelector('title');
            if(title) {
                title.innerHTML = '';
            } else {
                title = document.createElement('title');
                head.appendChild(title);
            }
            title.appendChild(document.createTextNode(text));
        };

        title(appName);
        link({rel: "icon", sizes: "192x192", href: icon});
        link({rel: 'apple-touch-icon', href: icon});
        link({rel: 'apple-touch-startup-image', href: splash});
        link({rel: "manifest", href: "/dist/json/manifest.json"});
        meta({name: 'apple-mobile-web-app-title', content: appName});
        meta({name: 'apple-mobile-web-app-capable', content: "yes"});
        meta({name: "mobile-web-app-capable", content: "yes"});
        meta({name: "viewport", content: "user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"});
        //meta({name:"apple-mobile-web-app-status-bar-style", content:"black"});

        let html = document.querySelector('html');
        html.setAttribute('manifest', '/dist/appcache/index.manifest');

        return document;
    });