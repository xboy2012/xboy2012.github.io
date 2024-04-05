import gulp from 'gulp';
import pug from 'gulp-pug';
import htmlmin from 'gulp-htmlmin';
import {ROOT_DIR} from './core/consts';
import webapp from './plugins/gulp-webapp';

import './loader_js';

gulp.task('index_html', ['loader_js'], () => {
    return gulp.src(`${ROOT_DIR}/src/pug/index.pug`)
        .pipe(
            pug()
        )
        .pipe(
            webapp()
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
            gulp.dest(`${ROOT_DIR}/docs/dist/html`)
        )
});