var gulp = require('gulp'),
    del = require('del');

module.exports = function(){
    "use strict";

    gulp.task('clean', function (done) {
        "use strict";

        del(['./build'], function (err) {
            done(err);
        });
    });

};
