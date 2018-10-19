var gulp=require('gulp');
gulp.task('hello',function(){
    console.log('hello DIpali');
});
var sass=require('gulp-sass');
gulp.task('sass',function(){
   return gulp.src('scss/**/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('css'))
});
gulp.task('watch',function(){
   gulp.watch('scss/**/*.scss',['sass']);
});
var useref=require('gulp-useref');
var uglify=require('gulp-uglify');
var gulpIf=require('gulp-if');

gulp.task('useref',function(){
   return gulp.src('*.html')
   .pipe(useref())
   .pipe(gulpIf('*.js',uglify()))
   .pipe(gulp.dest('dist'));
    });
var del=require('del');


