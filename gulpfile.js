/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
 
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

var paths = {
  scripts: ['client/js/module.js', 'client/js/constants.js', 'client/js/controllers/**/*.js', 'client/js/services/**/*.js'],
  styles: 'client/css/custom.scss'
};

// Clean
gulp.task('clean', function(cb) {
    del(['build'], cb)
});

// Styles
gulp.task('styles', function() {
  return sass(paths.styles, {style: 'expanded'})
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('build/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
 
// Copy all static images
gulp.task('images', function() {
  //return gulp.src(paths.images)
  //  .pipe(cache(imagemin({ optimizationLevel: 5})))
  //  .pipe(gulp.dest('build/img'))
  //  .pipe(notify({ message: 'Images task complete' }));
});
 
// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  //gulp.watch(paths.images, ['images']);
 
  // Create LiveReload server
  livereload.listen();
  // Watch any files in build/, reload on change
  gulp.watch(['build/**']).on('change', livereload.changed);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean'], function() {
  gulp.start('watch', 'scripts', 'images', 'styles');
});