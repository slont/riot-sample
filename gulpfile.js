var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('copy', function() {
    gulp.src(['./src/views/**/*.html'])
        .pipe(gulp.dest('app'));
});

gulp.task('sass', function() {
    gulp.src(['./src/styles/**/*.scss'])
        .pipe(sass())
        .pipe(minifycss())
        .pipe(rename({ extname: '.min.css'}))
        .pipe(gulp.dest('app/styles'));
});

gulp.task('webpack', function() {
    gulp.src(['./src/scripts/**/*.js'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('app/scripts'));
});

gulp.task('build', ['copy', 'sass', 'webpack']);

gulp.task('watch', ['build'], function() {
    gulp.watch(['./src/views/**/*.html'], ['copy']);
    gulp.watch(['./src/styles/**/*.scss'], ['sass']);
    gulp.watch(['./src/scripts/**/*.js', './src/tags/**/*.tag'], ['webpack']);
});
