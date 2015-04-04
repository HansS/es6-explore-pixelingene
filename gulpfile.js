var config = require('./gulp.config');

[
    'serve',
    'babel',
    'clean'
].forEach(function (task) {
        "use strict";
        require('./gulp-tasks/' + task)(config);
    });


