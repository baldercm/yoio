// Generated on 2014-09-23 using generator-ionic 0.5.4
'use strict';

/* jslint no-native-reassign: false */
var _ = require('lodash');
var path = require('path');
var cordova = require('cordova');
var spawn = require('child_process').spawn;

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    yeoman: {
      app: 'app',
      scripts: 'scripts',
      styles: 'styles',
      images: 'images'
    },

    ngconstant: {
      options: {
        space: ' ',
        wrap: '\'use strict\';\n\n{%= __ngModule %}',
        name: 'yoioConfig',
        dest: '<%= yeoman.app %>/<%= yeoman.scripts %>/config.js'
      },
      development: {
        constants: {
          ENV: {
            name: 'development',
            apiEndpoint: 'http://127.0.0.1:9000/'
          }
        }
      },
      production: {
        constants: {
          ENV: {
            name: 'production',
            apiEndpoint: 'http://api.yoio.com/'
          }
        }
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/<%= yeoman.scripts %>/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['<%= yeoman.app %>/<%= yeoman.styles %>/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['ngconstant:development']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/views/**/*.html',
          '.tmp/<%= yeoman.styles %>/**/*.css',
          '<%= yeoman.app %>/<%= yeoman.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      e2etest: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: ['www']
        }
      },
      coverage: {
        options: {
          port: 9002,
          open: true,
          base: ['coverage']
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/<%= yeoman.scripts %>/**/*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/unit/**/*.js']
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'www/*',
            '!www/.git*'
          ]
        }]
      },
      server: '.tmp',
      coverage: 'coverage'
    },

    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/<%= yeoman.styles %>/',
          src: '{,*/}*.css',
          dest: '.tmp/<%= yeoman.styles %>/'
        }]
      }
    },

    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        // exclude: ['bower_components/ionic/release/css/ionic.css'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/<%= yeoman.styles %>',
        cssDir: '.tmp/<%= yeoman.styles %>',
        generatedImagesDir: '.tmp/img/generated',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/<%= yeoman.scripts %>',
        fontsDir: '<%= yeoman.app %>/<%= yeoman.styles %>/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        httpFontsPath: '/<%= yeoman.styles %>/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: 'www',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    usemin: {
      html: ['www/**/*.html'],
      css: ['www/<%= yeoman.styles %>/**/*.css'],
      options: {
        assetsDirs: ['www']
      }
    },

    cssmin: {
      options: {
        root: '<%= yeoman.app %>',
        noRebase: true
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: 'www',
          src: ['*.html', 'views/**/*.html'],
          dest: 'www'
        }]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: 'www',
          src: [
            'images/**/*.{png,jpg,jpeg,gif,webp,svg}',
            '*.html',
            'views/**/*.html',
            'fonts/*',
            'api/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/<%= yeoman.images %>',
          dest: 'www/<%= yeoman.images %>',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/<%= yeoman.styles %>',
        dest: '.tmp/<%= yeoman.styles %>/',
        src: '{,*/}*.css'
      },
      fonts: {
        expand: true,
        cwd: 'app/bower_components/ionic/release/fonts/',
        dest: '<%= yeoman.app %>/fonts/',
        src: '*'
      },
      vendor: {
        expand: true,
        cwd: '<%= yeoman.app %>/vendor',
        dest: '.tmp/<%= yeoman.styles %>/',
        src: '{,*/}*.css'
      },
      all: {
        expand: true,
        cwd: '<%= yeoman.app %>/',
        src: '**',
        dest: 'www/'
      }
    },

    concurrent: {
      server: [
        'compass:server',
        'copy:styles',
        'copy:vendor',
        'copy:fonts'
      ],
      test: [
        'compass',
        'copy:styles',
        'copy:vendor',
        'copy:fonts'
      ],
      dist: [
        'compass:dist',
        'copy:styles',
        'copy:vendor',
        'copy:fonts'
      ]
    },

    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      dev: {
        background: true,
        browsers: ['PhantomJS']
      },
      singleRun: {
        singleRun: true,
        browsers: ['PhantomJS'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
          'app/scripts/**/!(controllers|route).js': ['coverage']
        },
        coverageReporter: {
          reporters: [
            { type: 'html', dir: 'coverage' },
            { type: 'text' }
          ]
        }
      }
    },

    protractor: {
      e2etest: {
        options: {
          configFile: 'test/protractor.conf.js'
        }
      }
    },

    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/<%= yeoman.scripts %>',
          src: '*.js',
          dest: '.tmp/concat/<%= yeoman.scripts %>'
        }]
      }
    }

  });

  // Register tasks for all Cordova commands, but namespace
  // the cordova:build since we already have a build task.
  _.functions(cordova).forEach(function (name) {
    name = (name === 'build') ? 'cordova:build' : name;
    grunt.registerTask(name, function () {
      this.args.unshift(name.replace('cordova:', ''));
      // Handle URL's being split up by Grunt because of `:` characters
      if (_.contains(this.args, 'http') || _.contains(this.args, 'https')) {
        this.args = this.args.slice(0, -2).concat(_.last(this.args, 2).join(':'));
      }
      var done = this.async();
      var exec = process.platform === 'win32' ? 'cordova.cmd' : 'cordova';
      var cmd = path.resolve('./node_modules/cordova/bin', exec);
      var child = spawn(cmd, this.args);
      child.stdout.on('data', function (data) {
        grunt.log.writeln(data);
      });
      child.stderr.on('data', function (data) {
        grunt.log.error(data);
      });
      child.on('close', function (code) {
        code = (name === 'cordova:build') ? true : code ? false : true;
        done(code);
      });
    });
  });

  // Since Apache Ripple serves assets directly out of their respective platform
  // directories, we watch all registered files and then copy all un-built assets
  // over to www/. Last step is running cordova prepare so we can refresh the ripple
  // browser tab to see the changes. Technically ripple runs `cordova prepare` on browser
  // refreshes, but at this time you would need to re-run the emulator to see changes.
  grunt.registerTask('ripple', ['wiredep', 'copy:all', 'ripple-emulator']);
  grunt.registerTask('ripple-emulator', function () {
    grunt.config.set('watch', {
      all: {
        files: _.flatten(_.pluck(grunt.config.get('watch'), 'files')),
        tasks: ['copy:all', 'prepare']
      }
    });

    var cmd = path.resolve('./node_modules/ripple-emulator/bin', 'ripple');
    var child = spawn(cmd, ['emulate']);
    child.stdout.on('data', function (data) {
      grunt.log.writeln(data);
    });
    child.stderr.on('data', function (data) {
      grunt.log.error(data);
    });
    process.on('exit', function (code) {
      child.kill('SIGINT');
      process.exit(code);
    });

    return grunt.task.run(['watch']);
  });

  grunt.registerTask('watch:karma', function () {
    var karma = {
      files: ['<%= yeoman.app %>/<%= yeoman.scripts %>/**/*.js', 'test/unit/**/*.js'],
      tasks: ['newer:jshint:test', 'karma:dev:run']
    };
    grunt.config.set('watch', karma);
    return grunt.task.run(['watch']);
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'ngconstant:development',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('dev', [
    'clean:server',
    'ngconstant:development',
    'wiredep',
    'concurrent:server',
    'autoprefixer',
    'connect:livereload',
    'karma:dev:start',
    'watch:karma'
  ]);

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'newer:jshint',
    'karma:singleRun'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'newer:jshint',
    'ngconstant:production',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'karma:singleRun',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'usemin',
    'htmlmin'
    // 'cordova:build'
  ]);

  grunt.registerTask('e2etest', [
    'build',
    'connect:e2etest',
    'protractor'
  ]);

  grunt.registerTask('cordova', [
    'copy:all',
    'cordova:build'
  ]);

  grunt.registerTask('coverage', [
    'clean:coverage',
    'clean:server',
    'concurrent:test',
    'newer:jshint',
    'karma:singleRun',
    'connect:coverage:keepalive'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
