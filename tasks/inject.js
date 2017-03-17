var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var config = require('./config');

gulp.task('inject-vendor', function() {
	//
	return gulp
		.src(paths.index)
		.pipe(wiredep({}))
		.pipe(gulp.dest('./www'));
});

gulp.task('inject-own', function() {
	// 
	return gulp
		.src(paths.index)
		.pipe(inject(gulp.src(paths.sources, {read: false})))
		.pipe(gulp.dest('./www'));
});