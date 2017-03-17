// Use the Config Object in Tasks
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var connectPlug = require('gulp-connect');
var config = require('./config');

gulp.task('js', function() {
    return gulp
        .src(config.paths.src.js)
        .pipe(config.run.js.uglify ? uglify(config.plugin.js.uglify) : gutil.noop())
        .pipe(config.run.js.concat ? concat(config.plugin.js.concat) : gutil.noop())
        .pipe(gulp.dest(config.paths.dest.js))
        .pipe(connectPlug.reload());
});
