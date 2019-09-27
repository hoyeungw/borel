let gulp = require('gulp')
let uglify = require('gulp-terser')

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function () {
  gulp.src('dist/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/index-min.js'))
})

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
  // 监听文件修改，当文件被修改则执行 script 任务
  gulp.watch('dist/index.js', ['script'])
})

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 script 任务和 auto 任务
gulp.task('default', gulp.series('script'))