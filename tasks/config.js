var lodash = require('lodash');
var gutil = require('gulp-util');
var env = gutil.env.env || 'development';

// Store Application Constants for Each Environment in Their Own Objects
var constants = {
    default: {
        apiHost: ''
    },
    development: {
        apiHost: 'http://localhost:8080'
    },
    staging: {
        apiHost: 'http://staging.example.com/api/'
    },
    production: {
        apiHost: 'http://eddienaff.com'
    }
};

// Remove Hard Coded Paths and Put them into a Separate Object
var paths = {
    src: {
        js: './public/js/*.js',
        constants: 'constants.js',
        html: './public/*.html',
        css: './public/css/*.css'
    },
    dest: {
        js: './public/dist/js/',
        constants: 'dist/',
        html: './public/',
        css: './public/dist/css/'
    }
};

// Create an Object for Toggling Plugins
var run = {
    default: {
        js: {
            uglify: false
        },
        css: {
            cssnano: false
        },
        connect: {
            connectPlug: false
        },
        injectVendor: {
            wiredep: false
        }
    },
    development: {
        js: {
            uglify: false,
            concat: false
        },
        css: {
            autoprefixer: false,
            concat: false,
            cleanCSS: false
        },
        connect: {
            connectPlug: true
        },
        injectVendor: {
            wiredep: true
        }
    },
    staging: {
        js: {
            uglify: true
        },
        css: {
            cssnano: true
        },
        injectVendor: {
            wiredep: false
        },
        connect: {
            connectPlug: false
        }
    },
    production: {
        js: {
            uglify: true,
            concat: true
        },
        css: {
            autoprefixer: true,
            concat: true,
            cleanCSS: true
        },
        injectVendor: {
            wiredep: true
        },
        connect: {
            connectPlug: true
        }
    }
};

// Store Plugin Options Into Its Own Object
var plugin = {
    default: {
        js: {
            uglify: {
                mangle: true
            }
        },
        css: {
            //
        },
        connect: {
            server: {root: './public/', livereload: true}       
        }
    },
    development: {
        js: {
            uglify: {
                mangle: false
            }
        },
        injectVendor: {
            wiredep: {}
        },
        connect: {
	        server: {root: './public/', livereload: true}       
        }
    },
    staging: {
        js: {
            uglify: {
                mangle: true
            }
        },
        css: {

        },
        connect: {
            server: {root: './public/', livereload: true}       
        }
    },
    production: {
        js: {
            uglify: {
                mangle: true
            },
            concat: {
            	path: 'bundle-js.min.js'
            }
        },
        css: {
        	autoprefixer: {
        		browsers: ['last 2 versions'],
        		cascade: false
        	},
        	concat: {
        		path: 'bundle-css.min.css'
        	},
        	cleanCSS: {
        		compatibility: '*'
        	}
        },
        connect: {
            server: {root: './public/', livereload: true}       
        }
    }
};

// Merge Environment-Specific Options with Default Options
var runOpts = lodash.merge({}, run.default, run[env]);
var pluginOpts = lodash.merge({}, plugin.default, plugin[env]);
var constantsOpts = lodash.merge({}, constants.default, constants[env]);

module.exports.paths = paths;
module.exports.constants = constantsOpts;
module.exports.run = runOpts;
module.exports.plugin = pluginOpts;
