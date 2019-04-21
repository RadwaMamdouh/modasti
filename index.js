var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
 
gulp.task('default', function () {
  return gulp.src('assets/css/*.css')
    .pipe(concatCss("styles/radwa.css"))
    .pipe(concatCss("style/tarek.css"))
    .pipe(gulp.dest('out/style.css'));
});
