import gulp from 'gulp';
import {rollup} from 'rollup';
import {ROOT_DIR} from './core/consts';

gulp.task('loader_js', () => {
    return rollup({
        entry: `${ROOT_DIR}/src/js/loader.js`,
        //plugins: [],
    })
    .then((bundle) => {
        bundle.write({
            format: "iife",
            dest: `${ROOT_DIR}/tmp/loader.js`
        });
    });
});


