var gulp = require('gulp');
var connectPlug = require('gulp-connect');
var gutil = require('gulp-util');

var config = require('./config');


gulp.task('connect', function() {
	connectPlug.server(config.run.connect.connectPlug ? config.plugin.connect.server : gutil.noop());
});