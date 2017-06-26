import gulp from 'gulp';
import stylus from 'gulp-stylus';
import cssnano from 'gulp-cssnano';
import {ROOT_DIR} from './core/consts';

gulp.task('index_css', () => {
    return gulp.src(`${ROOT_DIR}/src/stylus/index.styl`)
        .pipe(
            stylus()
        )
        .pipe(
            cssnano()
        )
        .pipe(
            gulp.dest(`${ROOT_DIR}/dist/css`)
        );
});