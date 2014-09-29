module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // reporters to use (dots, coverage)
    reporters: ['dots'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/collide/collide.js',
      'app/bower_components/ionic/release/js/ionic.js',
      'app/bower_components/ionic/release/js/ionic-angular.js',
      'app/scripts/**/*.js',
      // 'test/mock/**/*.js',
      'test/jasmine-exts.js',
      'test/unit/**/*.js'
    ],

    // web server port
    port: 9009,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    colors: true,

    // Uncomment the following lines if you are using grunt's server to run the tests
    proxies: {
      '/': 'http://localhost:9000/'
    },
    // URL root prevent conflicts with the site root
    urlRoot: '/_karma_/'
  });
};
