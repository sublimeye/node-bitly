'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('development:test:unit', function () {
  return gulp.src([__dirname + '/index.js'])
    .pipe(plugins.istanbul({ includeUntested: true }))
    .pipe(plugins.istanbul.hookRequire())
    .on('finish', function () {
        return gulp.src([__dirname + '/tests/**/*spec.js'], { read: false })
          .pipe(plugins.mocha({
            reporter: 'spec',
            coverageFolder: 'coverage/backend'
          }))
          .pipe(plugins.istanbul.writeReports({
              dir: 'coverage/backend',
              reporterOpts: {
                noCompact: true,
                dir: 'coverage/backend'
              }
            })
          );
      }
    );
});