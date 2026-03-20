const gulp = require("gulp");
const del = require("del");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const esbuild = require("esbuild");
const path = require("path");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
// ===== CLEAN =====
function cleanSource() {
  return del(["template/**", "!template"]);
}

// ===== COPY ASSETS (exclude JS) =====
function copyAsset() {
  return gulp
    .src(["src/assets/**/*", "!src/assets/js/main.js"])
    .pipe(gulp.dest("./template/assets"));
}

// ===== BUNDLE JS (1 FILE) =====
function bundleJS(done) {
  esbuild
    .build({
      entryPoints: ["./src/assets/js/main.js"], // file chính
      bundle: true,
      outfile: "./template/assets/js/index.min.js",
      minify: true,
      sourcemap: true,
      target: ["es2015"],
    })
    .then(() => done())
    .catch((err) => {
      console.error(err);
      done();
    });
}

// ===== SCSS =====
function style() {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cleanCSS({
        level: {
          1: { specialComments: 0 },
          2: true,
        },
      }),
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./template/assets/css"))
    .pipe(browserSync.stream());
}

// ===== HTML (PUG) =====
function html() {
  return gulp
    .src([
      "src/pug/**/*.pug",
      "!src/pug/_layout/*.pug",
      "!src/pug/_modules/*.pug",
      "!src/pug/_mixins/*.pug",
    ])
    .pipe(
      pug({
        doctype: "html",
        pretty: true,
      }),
    )
    .pipe(gulp.dest("./template"))
    .pipe(browserSync.stream());
}

// ===== WATCH =====
function watch() {
  browserSync.init({
    server: {
      baseDir: "./template",
    },
    port: 4000,
  });

  gulp
    .watch("src/assets/js/**/*.js", bundleJS)
    .on("change", browserSync.reload);
  gulp.watch("src/assets/**/*", copyAsset).on("change", browserSync.reload);
  gulp.watch("src/scss/**/*.scss", style);
  gulp.watch("src/pug/**/*.pug", html);
}

// ===== BUILD =====
const build = gulp.series(
  cleanSource,
  gulp.parallel(style, html, bundleJS, copyAsset),
  watch,
);

// ===== EXPORT =====
exports.default = build;
exports.build = build;
exports.bundleJS = bundleJS;
