// Auto-generate the Constants File
var gulp = require('gulp');
var file = require('gulp-file');
var config = require('./config');

gulp.task('constants', function() {
    var constantsObjString, codeString, key, value;
    constantsObjString = '{';
    for (key in config.constantsOpts) {
        value = config.constantsOpts[key];
        if (typeof value === 'string') {
            value = '\'' + value + '\'';
        }
        constantsObjString += '\n ' + key + ': ' + value + ',';
    }
    // Remove the last comma
    constantsObjString = constantsObjString.substring(0, constantsObjString.length - 1);
    constantsObjString += '\n }';
    codeString = ';(function(){' +
        '\n angular.module(\'Constants\', [])' +
        '\n .constant(\'Constants\', ' + constantsObjString + ');' +
        '\n})();';
    return file('constants.js', codeString, { src: true })
        .pipe(gulp.dest(config.paths.dest.js));
});
