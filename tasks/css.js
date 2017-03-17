//CSS plugins
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var connectPlug = require('gulp-connect');

// Add the config to load options below, these become task specific options
var config = require('./config');

gulp.task('css', function() {
    return gulp
        .src(config.paths.src.css)
        .pipe(config.run.css.autoprefixer ? autoprefixer(config.plugin.css.autoprefixer) : gutil.noop())
        .pipe(config.run.css.cleanCSS ? cleanCSS(config.plugin.css.cleanCSS) : gutil.noop())
        .pipe(config.run.css.concat ? concat(config.plugin.css.concat) : gutil.noop())
        .pipe(gulp.dest(config.paths.dest.css))
        .pipe(connectPlug.reload());
});