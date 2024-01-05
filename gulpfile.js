const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/css/main.scss') 
    .pipe(sass({outputStyle: 'compressed'})) 
    .pipe(gulp.dest('./build/css')); 
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js') 
    .pipe(uglify()) 
    .pipe(gulp.dest('./build/scripts')) 
}

exports.default = function() { 
    gulp.watch('./source/css/*.scss', { ignoreInitial: false},gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false},gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false},gulp.series(comprimeImagens));
}
