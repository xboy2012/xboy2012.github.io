import gulp from 'gulp';
import file from 'gulp-file';
import {ROOT_DIR} from './core/consts';
import {appName, bgColor, icon} from '../src/js/manefest';

gulp.task('android_manifest', () => {
    let json = {
        "name": appName,
        "background_color": bgColor,
        "icons": [
            {
                "src": icon,
                "sizes": "192x192",
                "type": "image/png",
                "density": 4.0
            }
        ],
        "start_url": "/index.html",
        "display": "standalone",
        "orientation": "portrait"
    };

    return file('manifest.json', JSON.stringify(json), { src: true })
        .pipe(gulp.dest(`${ROOT_DIR}/docs/dist/json`));
});