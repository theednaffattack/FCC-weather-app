//Watch plugins
var gulp = require('gulp');

// Add the config to load options below, these become task specific options
var config = require('./config');

gulp.task('watch', function() {
	gulp.watch(config.paths.src.js, ['js']);
	gulp.watch(config.paths.src.css, ['css']);
	gulp.watch(config.paths.src.html, ['html']);
});

