var gulp = require('gulp');
var inject = require('gulp-inject');

var config = require('./config');

gulp.task('injectOwn', function() {
	// 
	return gulp
		.src(paths.index)
		.pipe(inject(gulp.src(paths.sources, {read: false})))
		.pipe(gulp.dest('./www'));
});