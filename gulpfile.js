let gulp = require('gulp')
let less = require('gulp-less')
let connect = require('gulp-connect')
let template = require('gulp-template')
let imgmin = require('gulp-imagemin')
let cssmin = require('gulp-clean-css')
let jsmin = require('gulp-uglify')
let autofixer = require('gulp-autoprefixer')

let indexcss = 'css/index.css'
let listcontentcss = 'css/listcontent.css'

gulp.task('connect', () => {
	connect.server({
		root: 'dist/',
		livereload: true
	})
})
// 开启服务器
gulp.task('reloadhtml', () => {
	gulp.src('./dist/index.html')
			.pipe(connect.reload())
})
// 重载页面

gulp.task('cpfont', () => {
	gulp.src('src/font/**/*.*')
			.pipe(gulp.dest('dist/font'))
})

gulp.task('indexhtml', () => {
	gulp.src('./src/index.html')
			.pipe(template({indexcss: indexcss}))
			.pipe(gulp.dest('dist/'))
})
// 复制 src/index -> dist/html
gulp.task('listcontenthtml', () => {
	gulp.src(['src/list.html','src/content.html'])
			.pipe(template({ listcontentcss: listcontentcss}))
			.pipe(gulp.dest('dist/'))
})
// list+content  html
gulp.task('wacthhtml', () => {
	gulp.watch('./src/index.html', ['indexhtml','reloadhtml'])
	gulp.watch(['./src/list.html','src/content.html'], ['listcontenthtml'])
})
// 监听 index  刷新html


gulp.task('img', () => {
	gulp.src('src/img/**/*.*')
			.pipe(imgmin({
				progressive: true
			}))
			.pipe(gulp.dest('dist/img'))
})
// 压缩图片
gulp.task('watchimg', () => {
	gulp.watch('src/img/**/*.*',['img','reloadhtml'])
})
// 监听 图片文件夹


gulp.task('less', () => {
	gulp.src(['src/less/index.less','src/less/listcontent.less'])
			.pipe(less())
			.pipe(cssmin({ compatibility: 'ie8' }))
			.pipe(autofixer({
				browsers: ['last 2 versions'],
        cascade: false
			}))
			.pipe(gulp.dest('dist/css'))
})
// 编译less
gulp.task('watchless', () => {
	gulp.watch('src/less/**/*.less', ['less','reloadhtml'])
})
// 监听less


gulp.task('js', () => {
	gulp.src('src/js/**/*.js')
			.pipe(jsmin())
			.pipe(gulp.dest('dist/js'))
})
// 压缩js
gulp.task('watchjs', () => {
	gulp.watch('src/js/**/*.js', ['js','reloadhtml'])
})
// 监听 Js

gulp.task('default', [
	// reload
	'indexhtml', 'img', 'less', 'js', 'cpfont', 'connect',
	// Watch
	'wacthhtml', 'watchless', 'watchjs'
	]
)
