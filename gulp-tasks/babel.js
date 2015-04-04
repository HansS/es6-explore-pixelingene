var gulp = require('gulp'),
    babel = require('gulp-babel');

module.exports = function (config) {
    "use strict";

    gulp.task('copy-runtime', ['clean'], function () {
        "use strict";

        var runtimeFiles = [
            './node_modules/babel-core/browser-polyfill.js',
            './bower_components/system.js/dist/system.js',
            './bower_components/system.js/dist/system.js.map',
            './bower_components/es6-module-loader/dist/es6-module-loader.js',
            './bower_components/es6-module-loader/dist/es6-module-loader.js.map'
        ];

        return gulp.src(runtimeFiles)
            .pipe(gulp.dest(config.buildDir + 'lib'));
    });

    gulp.task('build', ['clean', 'copy-runtime'], function () {
        "use strict";

        var babelOptions = {
            modules: 'system'
        };

        return gulp.src(config.srcDir + '**/*.js')
            .pipe(babel(babelOptions))
            .pipe(gulp.dest(config.buildDir));
    });


};
