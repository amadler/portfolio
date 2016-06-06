// run gulpfile-install to install modules
var plugins = require('gulp-load-plugins')(),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    path = require('path'),
    rename = require('gulp-rename'),
    minify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    gutil = require('gulp-util'),
    gulpJade    = require('gulp-jade'),
    ext_replace = require('gulp-ext-replace'),
    path_sass = './sass/**/*.scss',
    path_sassfile = './sass/style.scss',
    // path_jade = '../assets/css/',
    // path_css = '../assets/css/',
    path_css = './app/css/',
    path_js = ''
    gulp.task('jade', function(){
    	return gulp.src('./jade/**/*.jade')
    		.pipe(gulpJade({
    			pretty:true
    		}))
        .pipe(ext_replace('.html.twig'))
    		.pipe(gulp.dest('../views'))
    })
    gulp.task('change', function() {
      gulp.src('./twig/**/*.html')
          .pipe(rename('twig'))
          .pipe(gulp.dest('twig'))
    });

    gulp.task('autoprefixer', function () {
      return gulp.src(path_sass)
          .pipe(plugins.autoprefixer({
              browsers: ['last 2 versions'],
              cascade: false
          }))
          .pipe(gulp.dest(path_css));
    });
    gulp.task('sass', function () {
      return gulp.src(path_sassfile)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path_css));
    });
    gulp.task('watch', function () {
      gulp.watch( path_sass , ['sass']);
      gulp.watch( './jade/**/*.jade' , ['jade']);
    });
