// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
var path = require('path');
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var minifyJs = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var copy = require('gulp-copy');

var vendor = {
  css: [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/highlightjs/styles/github.css'
  ],
  js: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/highlightjs/highlight.pack.min.js',
    'node_modules/js-url/url.min.js',
    'node_modules/twbs-pagination/jquery.twbsPagination.min.js',
    "node_modules/mark.js/dist/jquery.mark.min.js",
    "node_modules/anchor-js/anchor.min.js"
  ],
  theme: [
    'node_modules/js-cookie/src/js.cookie.js',
    'theme/theme-manager.js',
    'theme/themeQuickLoad.js'
  ],
  webWorker: {
    src: ['lunr.js'],
    cwd: 'node_modules/lunr/'
  },
  font: {
    src: ['*'],
    cwd: 'node_modules/bootstrap/dist/fonts/'
  }
}

gulp.task('concat', function () {
  gulp.src(vendor.css)
    .pipe(minifyCss({ keepBreaks: true }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(concat('docfx.vendor.css'))
    .pipe(gulp.dest('./styles/'))
    ;
  gulp.src(vendor.js)
    .pipe(concat('docfx.vendor.js'))
    .pipe(gulp.dest('./styles/'))
    ;
  gulp.src(vendor.theme)
    .pipe(concat('docfx.theme.js'))
    .pipe(gulp.dest('./styles'))
    ;
});

gulp.task('copy', function () {
  gulp.src(vendor.font.src, { cwd: vendor.font.cwd })
    .pipe(copy('./fonts/'))
    ;
  gulp.src('node_modules/lunr/lunr.js')
    .pipe(minifyJs({
      ext: { min: '.min.js' }
    }))
    .pipe(gulp.dest('./styles/'))
    ;
});

gulp.task('default', ['concat', 'copy']);
