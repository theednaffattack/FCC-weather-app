// Use the Config Object in Tasks
var gulp = require('gulp');
var config = require('./config');

gulp.task('build', ['js', 'css', 'connect', 'watch']);
