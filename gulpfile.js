/* --------------------------------------
    config
-------------------------------------- */
var src = './src/*.js';

/* --------------------------------------
    end config
-------------------------------------- */
var gulp =           require('gulp');
var jshint =         require('gulp-jshint');
var uglify =         require('gulp-uglify');
var plumber =        require('gulp-plumber');
var rename =         require('gulp-rename');

/* --------------------------------------
    JS
-------------------------------------- */
gulp.task('js', function() {
	return gulp.src(src)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify({
			preserveComments: 'license'
		}))
		.pipe(rename(function(path){
			path.extname = '.min.js';
		}))
		.pipe(gulp.dest('./bin/'));
});

/* --------------------------------------
    Watch
-------------------------------------- */
gulp.task('watch', function() {
	gulp.watch(src, ['js']);
});

/* --------------------------------------
    default task
-------------------------------------- */
gulp.task('default', ['js', 'watch']);
