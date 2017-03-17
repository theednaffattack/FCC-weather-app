//CSS plugins
var gulp = require('gulp');
var connectPlug = require('gulp-connect');

// Add the config to load options below, these become task specific options
var config = require('./config');

gulp.task('html', function() {
	gulp.src(config.paths.src.html)
	.pipe(connectPlug.reload());
});