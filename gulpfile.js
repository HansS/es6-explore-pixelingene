var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch');

gulp.task('clean', function (done) {
    "use strict";

    del(['./build'], function (err) {
        done(err);
    });
});

gulp.task('babel-copy', ['clean'], function () {
    "use strict";

    return gulp.src([
        './node_modules/babel-core/browser-polyfill.js',
        './bower_components/system.js/dist/system.js',
        './bower_components/system.js/dist/system.js.map',
        './bower_components/es6-module-loader/dist/es6-module-loader.js',
        './bower_components/es6-module-loader/dist/es6-module-loader.js.map'
    ])
        .pipe(gulp.dest('./build/lib'));
});

gulp.task('es6-build', ['clean', 'babel-copy'], function () {
    "use strict";

    var babelOptions = {
        modules: 'system'
    };

    return gulp.src('src/**/*.js')
        .pipe(babel(babelOptions))
        .pipe(gulp.dest('./build'));
});

gulp.task('build-and-reload', ['es6-build'], browserSync.reload);

gulp.task('serve', ['es6-build'], function () {
    "use strict";

    watch(['src/index.html', 'src/**/*.js'], function () {
        gulp.start('build-and-reload');
    });

    browserSync({
        server: {
            baseDir: 'src',
            routes: {
                '/build': './build',
                '/bower_components': './bower_components'
            }
        }
    });
});


