var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch');

module.exports = function (config) {
    "use strict";


    gulp.task('serve', ['build'], function () {
        "use strict";

        watch([
            config.srcDir + 'index.html',
            config.srcDir + '**/*.js'
        ], function () {
            gulp.start('build-and-reload');
        });

        browserSync({
            server: {
                baseDir: config.srcDir,
                routes: {
                    '/build': config.buildDir,
                    '/bower_components': './bower_components'
                }
            }
        });
    });

    gulp.task('build-and-reload', ['build'], browserSync.reload);

};