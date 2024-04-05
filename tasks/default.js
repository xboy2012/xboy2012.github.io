import gulp from 'gulp';

import './index_html';
import './index_css';
import './index_js';
import './android_manifest';

gulp.task('default', ['index_html', 'index_css', 'index_js', 'android_manifest']);