import gulp from 'gulp';
import pug from 'gulp-pug';
import htmlmin from 'gulp-htmlmin';
import {ROOT_DIR} from './core/consts';

gulp.task('index_html', () => {
    gulp.src(`${ROOT_DIR}/src/pug/index.pug`)
        .pipe(
            pug()
        )
        .pipe(
            htmlmin({
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            })
        )
        .pipe(
            gulp.dest(`${ROOT_DIR}/dist/html`)
        )
});