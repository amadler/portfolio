// run gulpfile-install to install modules
var plugins = require('gulp-load-plugins')(),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    // path = require('path'),
    // rename = require('gulp-rename'),
    // minify = require('gulp-uglify'),
    // minifyCss = require('gulp-minify-css'),
    // gutil = require('gulp-util'),
    gulpJade = require('gulp-jade'),
    jasmine = require('gulp-jasmine'),
    notify = require('gulp-notify'),
    reporters = require('jasmine-spec-reporter'),
    // ext_replace = require('gulp-ext-replace'),
    path_sass = './app/sass/**/*.scss',
    path_sassfile = './app/sass/style.scss',
    path_css = './app/css/',
    path_jade = './app/jade/**/*.jade',
    path_templates = 'app/templates',
    path_js = '',
    path_specs = './app/specs/*.js';


gulp.task('test', function() {
    gulp.src(path_specs)
        .pipe(jasmine({
            reporter: new SpecReporter({displayStacktrace: 'all'})
        }))
        .on('error', notify.onError({
            title: 'Jasmine Test Failed',
            message: 'One or more tests failed, see the cli for details.'
        }));
});

gulp.task('jade', function() {
    return gulp.src(path_jade)
        .pipe(gulpJade({
            pretty: true
        }))
        .pipe(gulp.dest(path_templates))
});

gulp.task('autoprefixer', function() {
    return gulp.src(path_sass)
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(path_css));
});
gulp.task('sass', function() {
    return gulp.src(path_sassfile)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path_css));
});
gulp.task('watch', function() {
    gulp.watch(path_jade, ['jade']);
    gulp.watch(path_sass, ['sass']);
});
