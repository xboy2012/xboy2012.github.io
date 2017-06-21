import gulp from 'gulp';
import file from 'gulp-file';
import checksum from 'checksum';
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

gulp.task('appcache', ['android_manifest', 'index_html'], () => {
    let promises = files.concat('/dist/html/index.html').map(file => new Promise((resolve, reject) => {
        checksum.file(`${ROOT_DIR}${file}`, (err, sum) => {
            err ? reject(err) : resolve(sum);
        });
    }));

    return Promise.all(promises).then((sums) => {
        let sum = checksum(sums.join(''));

        let code = [
            'CACHE MANIFEST',
            `#${sum}`,
            'CACHE:',
            ...files,
            'NETWORK:',
            '*'
        ].join('\r\n');

        return file('index.manifest', code, {src:true})
            .pipe(
                gulp.dest(`${ROOT_DIR}/dist/appcache`)
            );
    });
});