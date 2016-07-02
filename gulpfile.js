"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run local dev server
var open = require('gulp-open'); // open url in browser
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        mainJs: './src/main.js',
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

gulp.task('html', function(){
   gulp.src([config.paths.html])
       .pipe(gulp.dest(config.paths.dist))
       .pipe(connect.reload())
});

gulp.task('js', function(){
   browserify(config.paths.mainJs)
       .transform(reactify)
       .bundle()
       .on('error', console.error.bind(console))
       .pipe(source('bundle.js'))
       .pipe(gulp.dest(config.paths.dist + '/scripts'))
       .pipe(connect.reload());
});

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + "/css"));
});

gulp.task('eslint', function(){
   return gulp.src(config.paths.js)
       .pipe(eslint({
           "ecmaFeatures": {
               "jsx": true
           },
           rules: {
               "quotes": 0,
               "no-trailing-spaces": 0,
               "eol-last": 0,
               "no-unused-vars": 0,
               "no-underscore-dangle": 0,
               "no-alert": 0,
               "no-lone-blocks": 0
           },
           globals: [
               'jQuery',
               '$'
           ],
           envs: [
               'browser',"node","jquery"
           ]
       }))
       .pipe(eslint.format())
});

gulp.task('watch', function(){
    gulp.watch([config.paths.html], ['html']);
    gulp.watch([config.paths.js], ['js', 'eslint']);
});

gulp.task('default', ['html', 'js', 'css', 'eslint', 'open', 'watch']);