import gulp from 'gulp';
import file from 'gulp-file';
import fs from 'fs';
import md5 from 'md5';
import {ROOT_DIR} from './core/consts';

import './android_manifest';
import './index_html';

const files = [
    '/dist/css/index.css',
    '/dist/images/icon.png',
    '/dist/images/splash.jpg',
    '/dist/js/index.js',
    '/dist/json/manifest.json'
];

const getCheckSum = () => {
    let promises = files.concat('/dist/html/index.html').map(file => new Promise((resolve, reject) => {
        fs.readFile(`${ROOT_DIR}${file}`, (err, buf) => {
            err ? reject(err) : resolve(md5(buf));
        });
    }));

    return Promise.all(promises).then((sums) => md5(sums.join('')));
};

const getManifestContent = (hash) => {
    return [
        'CACHE MANIFEST',
        `#${hash}`,
        'CACHE:',
        ...files,
        'NETWORK:',
        '*'
    ].join('\r\n');
};

gulp.task('appcache', ['android_manifest', 'index_html'], (callback) => {
    getCheckSum().then((hash) => {
        file('index.manifest', getManifestContent(hash), {src:true})
            .pipe(
                gulp.dest(`${ROOT_DIR}/dist/appcache`)
            )
            .on('end', callback);
    }, callback);
});