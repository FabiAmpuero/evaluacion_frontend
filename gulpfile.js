var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(/*cb*/){
	// tarea script
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js').pipe(gulp.dest('./src/js'));
});

gulp.task('fonts', function(){
	// tarea script
    return gulp.src('./node_modules/bootstrap/dist/fonts/*').pipe(gulp.dest('./src/fonts'));
});

gulp.task('jquery', function(){
	// tarea script
    return gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('./src/js'));
});

gulp.task('style', function() {
	// tarea style
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css').pipe(gulp.dest('./src/css'));
});

gulp.task('images', function() {
	// tarea images
});

gulp.task('sweetalertcss', function(){
	// tarea sweetalert css
    return gulp.src('./node_modules/sweetalert/dist/sweetalert.css').pipe(gulp.dest('./src/css'));
});

gulp.task('sweetalertjs', function(){
	// tarea sweetalert js
    return gulp.src('./node_modules/sweetalert/dist/sweetalert.min.js').pipe(gulp.dest('./src/js'));
});

gulp.task('selectcss', function(){
	// tarea sweetalert js
    return gulp.src('./node_modules/bootstrap-select/dist/css/bootstrap-select.min.css').pipe(gulp.dest('./src/css'));
});

gulp.task('selectjs', function(){
	// tarea sweetalert js
    return gulp.src('./node_modules/bootstrap-select/dist/js/bootstrap-select.min.js').pipe(gulp.dest('./src/js'));
});

gulp.task('sweetalert2css', function(){
	// tarea sweetalert css
    return gulp.src('./node_modules/sweetalert2/dist/sweetalert2.css').pipe(gulp.dest('./src/css'));
});

gulp.task('sweetalert2js', function(){
	// tarea sweetalert js
    return gulp.src('./node_modules/sweetalert2/dist/sweetalert2.min.js').pipe(gulp.dest('./src/js'));
});

gulp.task('default', ['images', 'style', 'script', 'jquery', 'sweetalertcss', 'sweetalertjs', 'fonts', 'selectcss', 'selectjs', 'sweetalert2css', 'sweetalert2js']);

