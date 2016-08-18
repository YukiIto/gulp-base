var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var frontnote = require("gulp-frontnote");
var uglify = require("gulp-uglify");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task("js", function() {
  gulp.src(["app/**/*.js","!app/public/js/min/**/*.js"])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest("./app/public/js/min"))
    .pipe(browser.reload({stream:true}))
});

gulp.task("sass", function() {
  gulp.src('./assets/sass/**/*.scss')
    .pipe(plumber())
    .pipe(frontnote({
      out: './assets/styleguide',
      css: '../../app/public/css/app.css'
    }))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./app/public/css"))
    .pipe(browser.reload({stream:true}))
});

gulp.task("default",['server'], function() {
    gulp.watch(["app/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch('./assets/sass/**/*.scss',["sass"]);
});