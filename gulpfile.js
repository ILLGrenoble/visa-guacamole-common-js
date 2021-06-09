var gulp = require('gulp');
var concat = require('gulp-concat');
var insert = require('gulp-insert');

gulp.task('default', function () {
    return gulp.src('src/*.js')
        .pipe(concat('guacamole.js'))
        .pipe(insert.append('module.exports = Guacamole;'))
        .pipe(gulp.dest('dist'));
});