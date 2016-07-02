"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run local dev server
var open = require('gulp-open'); // open url in browser

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
};

//Start local dev server
gulp.task('connect', function(){
   connect.server({
       root: ['dist'],
       port: config.port,
       base: config.devBaseUrl,
       livereload: true
   });
});

//first run connect task (runs after dev server opens)
gulp.task('open', ['connect'], function(){
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/"}));
});