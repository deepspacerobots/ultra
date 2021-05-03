// Requires Gulp v4.
const { src, dest, watch, series, parallel } = require("gulp");

// CSS Tools
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

// Image Tools
const imageResize = require("gulp-image-resize");
const imagemin = require("gulp-imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");

// JS Tools
const rollup = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");

// Build Tools
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const rename = require("gulp-rename");

// Config
const config = require("./gulp-config");

// Minify SASS
function sassMinify() {
	return src(config.style.dest + "/style.css")
		.pipe(cssnano()) // minify it
		.pipe(rename({ suffix: "-min" })) // rename it
		.pipe(dest(config.style.dest))
		.pipe(browsersync.stream()); // change the browser styles with no page reload
}

function sassCompile() {
	return src(config.style.main)
		.pipe(sass())
		.on("error", function (err) {
			console.log(err.formatted.toString());
			this.emit("end");
		})
		.pipe(
			// Add browser prefixes
			autoprefixer({
				overrideBrowserslist: ["> 1%", "last 2 versions", "ie >= 11"],
			})
		)
		.pipe(dest(config.style.dest))
		.pipe(browsersync.stream())
		.on("end", () => {
			sassMinify();
		});
}

function processImages() {
	let stream;
	config.images.sizes.forEach((size) => {
		stream = src(config.images.src)
			// resize the image
			.pipe(imageResize({ width: size.width }))
			// compress the image
			.pipe(
				imagemin(
					[
						imageminMozjpeg({
							quality: size.quality,
						}),
					],
					{
						verbose: true,
					}
				)
			)
			// send it to the right destination
			.pipe(dest(config.images.dest + "/" + size.dir));
	});
	return stream;
}

// Get all the code we've imported into our main script file
// Roll all those exported classes up into a single file
function jsRollup() {
	return rollup
		.rollup({
			input: config.script.main,
			plugins: [nodeResolve()],
		})
		.then((bundle) => {
			writeFile(bundle, "es", config.script.es6);
		});
}

// Transiple the other output file to something
// old browsers can understand
function jsTranspile() {
	return rollup
		.rollup({
			input: config.script.main,
			plugins: [
				nodeResolve(),
				babel({
					presets: [["@babel/env", { modules: false }]],
					sourceMaps: true,
					babelHelpers: "bundled",
					exclude: "node_modules/**",
				}),
			],
		})
		.then((bundle) => {
			writeFile(bundle, "iife", config.script.es5);
		});
}

function writeFile(bundle, format, file) {
	return bundle.write({
		file: file,
		format,
		name: "script",
	});
}

// Concat any code that from the dependencies folder before the
// rest of the code.  This is useful for old scripts that are not
// available in module form.
function jsConcatES6() {
	return src([config.script.deps, config.script.es6])
		.pipe(concat("script-esm.js"))
		.pipe(dest(config.script.dest));
}

function jsConcatES5() {
	return src([config.script.deps, config.script.es5])
		.pipe(concat("script.js"))
		.pipe(dest(config.script.dest));
}

// Create minified versions of our JS for prod
function jsMinify() {
	return src([config.script.es5, config.script.es6])
		.pipe(terser({ output: { comments: false } })) // Minify the JS
		.pipe(rename({ suffix: "-min" })) // Rename it
		.pipe(dest(config.script.dest)) // Write it to the output folder
		.pipe(browsersync.stream());
}

function reload(done) {
	browsersync.reload();
	done();
}

// Watch all the build files, refresh code live in the browser,
// If the markup changes, reload the browser
function watchFiles() {
	browsersync.init({
		//proxy: config.server.proxy,
		//host: config.server.host,
		server: {
			baseDir: "./",
		},
		open: "external",
		reloadOnRestart: true,
	});

	// Watch the Templates
	// Force reload on change
	watch(config.markup.templates, reload);

	// Watch the Style
	// Don't force style reload because we're
	// streaming changes to browsersync
	watch(
		[config.style.src, config.style.main],
		{ events: "all", ignoreInitial: false },
		series(sassCompile)
	);

	// Watch the JS
	// Don't force style reload because we're
	// streaming changes to browsersync
	watch(
		[config.script.modules, config.script.deps, config.script.main],
		series(jsRollup, jsTranspile, jsConcatES6, jsConcatES5, jsMinify)
	);
}
exports.watch = watchFiles;

exports.images = series(processImages);

// Buid all the code from source
exports.build = series(
	jsRollup,
	jsTranspile,
	jsConcatES6,
	jsConcatES5,
	jsMinify,
	sassCompile,
	processImages
);
