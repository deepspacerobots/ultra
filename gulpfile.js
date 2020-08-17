// Requires Gulp v4.
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
//const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('gulp-minify');

// JS Dependencies
const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const source = require('vinyl-source-stream');
//const buffer = require('vinyl-buffer');

// SFTP
//var sftp = require('gulp-sftp-up4');

// Config
const config = require('./gulp-config');

function reload(done) {
	browserSync.reload();
	done();
}

gulp.task('sass', function() {
	return gulp
		.src(config.style.main)
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(
			sass({
				outputStyle: 'expanded'
			}).on('error', sass.logError)
		)
		.pipe(postcss([ autoprefixer() ]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.style.output))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

gulp.task('sassMinify', function() {
	return gulp
		.src(config.style.main)
		.pipe(sassGlob())
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
		)
		.pipe(postcss([ autoprefixer() ]))
		.pipe(rename('style-min.css'))
		.pipe(gulp.dest(config.style.output))
		.pipe(
			browserSync.reload({
				stream: true
			})
		);
});

gulp.task(
	'browserSync',
	gulp.series(function(done) {
		browserSync.init({
			proxy: config.server.proxy,
			host: config.server.host,
			open: 'external',
			reloadOnRestart: true
		});
		done();
	})
);

gulp.task('jsRollup', function() {
	return rollup({
		input: config.script.main,
		format: 'es'
	})
		.pipe(source('script.js', config.script.output))
		.pipe(rename('script-esm.js'))
		.pipe(gulp.dest(config.script.output));
});

gulp.task('jsTranspile', function() {
	return rollup({
		input: config.script.main,
		format: 'es',
		treeshake: false,
		plugins: [
			babel({
				exclude: 'node_modules/**',
				babelrc: false,
				presets: [ '@babel/env' ]
			})
		]
	})
		.pipe(source('script.js', config.script.output))
		.pipe(gulp.dest(config.script.output));
});

gulp.task('jsMinify', function() {
	return gulp.src([ config.script.es5, config.script.es6 ]).pipe(minify()).pipe(gulp.dest(config.script.output)).pipe(
		browserSync.reload({
			stream: true
		})
	);
});

gulp.task(
	'watch',
	gulp.series([ 'browserSync', 'sass' ], function() {
		gulp.watch(config.markup.templates, gulp.series(reload));
		gulp.watch([ config.style.src, config.style.main ], gulp.series([ 'sass', 'sassMinify' ]));
		gulp.watch([ config.script.deps, config.script.main ], gulp.series([ 'jsRollup', 'jsTranspile', 'jsMinify' ]));
	})
);

gulp.task('build', gulp.series([ 'jsRollup', 'jsTranspile', 'jsMinify', 'sass', 'sassMinify' ]));
