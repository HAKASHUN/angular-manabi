var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var port = 3456;

gulp.task('connect', function() {
    connect.server({
        root: __dirname,
        port: port,
        livereload: true
    });
});

gulp.task('open', function(){
    var options = {
        url: 'http://localhost:' + port
    };
    gulp.src('./index.html')
        .pipe(open('', options));
});


gulp.task('serve', ['connect', 'open']);