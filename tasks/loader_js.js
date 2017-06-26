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
            useStrict: false,   //去除严格模式，减少无用字符，同时增加代码兼容性
            dest: `${ROOT_DIR}/tmp/loader.js`
        });
    });
});


