var gulp = require('gulp'),
        watch = require('gulp-watch')
;

gulp.task('watch:scss', function() {
    var last = {};
    watch(
        './*.js',
        {'events': ['add', 'change', 'unlink', 'addDir', 'unlinkDir']},
        function (f) {
            console.log('scss operation');
        }
    )
    ;
});
 
gulp.task('default', ['watch:scss']);