var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var gutil = require('gulp-util');
var config = require('./config');

gulp.task('injectVendor', function() {

	return gulp
		.src(config.paths.src.html)
        .pipe(config.run.injectVendor.wiredep ? wiredep(config.plugin.injectVendor.wiredep) : gutil.noop())
		.pipe(gulp.dest(config.paths.dest.html));
});

