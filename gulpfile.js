let gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync");

gulp.task('sass', function () {
    return gulp.src('app/assets/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest("app/assets/css"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
   browserSync({
       server: {
           baseDir: 'app'
       },
       notify: false
   });
});

gulp.task('watch',  gulp.parallel('browser-sync', 'sass', function () {
    gulp.watch('app/assets/sass/**/*.sass', gulp.series('sass'));
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
}));