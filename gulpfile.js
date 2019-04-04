// sass编译成css
//1.引入gulp包
//2.引入gulp-sass包
//3.生成gulp任务，进行sass编译
const gulp = require("gulp");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
gulp.task("compile",function(){
    return gulp.src("./src/sass/*.scss")
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
})


// 监听
gulp.task("jt",function(){
    return watch("./src/sass/*.scss",gulp.series("compile"));
})