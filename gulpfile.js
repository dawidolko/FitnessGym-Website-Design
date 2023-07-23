const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const kit = require('gulp-kit');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const paths = {
    html: './html/**/*.kit',
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    img: './src/img/*',
    dist: './dist',
    sassDest: './dist/css',
    jsDest: './dist/js',
    imgDest: './dist/img',
}

function sassCompiler(done) {
    src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.sassDest));
    done()
}

function javaScript(done) {
    src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.jsDest));
    done()
}

function convertImages(done) {
    src(paths.img)
        .pipe(imagemin())
        .pipe(dest(paths.imgDest));
    done()
}

function handleKits(done) {
    src(paths.html)
        .pipe(kit())
        .pipe(dest('./'));
    done()
}

function cleanStuff(done) {
    src(paths.dist, { read: false })
        .pipe(clean());
    done()
}

function startBrowserSync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    done()
}

function watchForChanges(done) {
    watch('./*.html').on("change", reload);
    watch([paths.html, paths.sass, paths.js], parallel(handleKits, sassCompiler, javaScript)).on("change", reload);
    watch(paths.img, convertImages).on("change", reload);
    done()
}


const mainFunctions = parallel(handleKits, sassCompiler, javaScript, convertImages)
exports.cleanStuff = cleanStuff
exports.default = series(mainFunctions, startBrowserSync, watchForChanges)
