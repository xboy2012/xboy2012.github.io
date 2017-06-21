import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

gulp.task('index_js', (callback) => {

    webpack(webpackConfig).run((err, stats) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
});


