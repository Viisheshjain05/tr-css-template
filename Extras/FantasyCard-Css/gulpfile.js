// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var dartsass = require("gulp-dart-sass");
// var sourcemaps = require("gulp-sourcemaps");
// var browserSync = require("browser-sync").create();
// var gcmq = require("gulp-group-css-media-queries");
// var cleanCSS = require("gulp-clean-css");

// // sass.compiler = require('node-sass');
// /* task to convert sass to minifies css and generate map files resp. */
// gulp.task("sass", function () {
//   return gulp
//     .src("./scss/**/*.scss")
//     .pipe(sourcemaps.init())
//     .pipe(dartsass().on("error", sass.logError))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("./static-assets/css"));
// });

// /* task to group-css-media-queries */
// gulp.task("gcmq", function () {
//   return gulp
//     .src("./static-assets/css/**/*.css")
//     .pipe(gcmq())
//     .pipe(cleanCSS())
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("./static-assets/css"));
// });

// /* task to reload browser automatically after the changes in file. */
// gulp.task("serve", function () {
//   browserSync.init({
//     injectChanges: true,
//     watch: true,
//     open: true,

//     proxy: "D:/UEFA/classic/classic/UCL-2021-22/UCL-Fantasy-cards/static-html",
//   });

//   gulp.watch(
//     ["./scss/**/*.scss", "./static-html/**/*.html"],
//     { usePolling: true },
//     gulp.series("sass", "gcmq", (done) => {
//       browserSync.reload();
//       done();
//     })
//   );
// });

// /* task to generate and watch css for the first time */
// gulp.task("default", gulp.series("serve"));




var gulp = require('gulp');
var sass = require('gulp-sass');
var dartsass = require('gulp-dart-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var gcmq = require('gulp-group-css-media-queries');
var cleanCSS = require('gulp-clean-css');

// sass.compiler = require('node-sass');
/* task to convert sass to minifies css and generate map files resp. */
gulp.task('sass', function () {
	return gulp.src('./scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(dartsass().on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./static-assets/css'));
});

/* task to group-css-media-queries */
gulp.task('gcmq', function () {
	return gulp.src('./static-assets/css/**/*.css')
		.pipe(gcmq())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./static-assets/css'))
});


/* task to reload browser automatically after the changes in file. */
gulp.task('serve', function () {
	browserSync.init({
		injectChanges: true,
		watch: true,
		open: true,
    proxy: "D:/UEFA/classic/classic/UCL-2021-22/UCL-Fantasy-cards/static-html",
	});

	gulp.watch(['./scss/**/*.scss', './static-html/**/*.html'], { usePolling: true }, gulp.series('sass', 'gcmq',  done => {
		browserSync.reload();
		done();
	}));

});

/* task to generate and watch css for the first time */
gulp.task('default', gulp.series('serve')); 

