import gulp from 'gulp';

import './index_html';
import './android_manifest';
import './appcache';
import './index_css';

gulp.task('default', ['index_html', 'android_manifest', 'appcache', 'index_css']);