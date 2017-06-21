import gulp from 'gulp';

import './index_html';
import './android_manifest';
import './appcache'

gulp.task('default', ['index_html', 'android_manifest', 'appcache']);