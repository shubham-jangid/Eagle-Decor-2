const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cssMin = require("gulp-css");

gulp.task(
  "css",
  gulp.series(function() {
    gulp
      .src([
        "public/css/open-iconic-bootstrap.min.css",
        "public/css/style.css",
        "public/css/animate.css",
        "public/css/owl.carousel.min.css ",
        "public/css/owl.theme.default.min.css ",
        "public/css/magnific-popup.css ",
        "public/css/aos.css ",
        "public/css/ionicons.min.css ",
        "public/css/icomoon.css ",
        "public/css/bootstrap-datepicker.css ",
        "public/css/jquery.timepicker.css",
        "public/css/flaticon.css ",
        "public/css/flaticon.css "
      ])
      .pipe(concat("app.css"))
      .pipe(cssMin())
      .pipe(gulp.dest("./public/css"));
  })
);

gulp.task(
  "script",
  gulp.series(function() {
    gulp
      .src([
        "public/js/jquery.min.js",
        "public/js/jquery-migrate-3.0.1.min.js",
        "public/js/popper.min.js",
        "public/js/bootstrap.min.js ",
        "public/js/jquery.easing.1.3.js ",
        "public/js/jquery.waypoints.min.js",
        "public/js/jquery.stellar.min.js",
        "public/js/owl.carousel.min.js ",
        "public/js/jquery.magnific-popup.min.js ",
        "public/js/aos.js ",
        "public/js/jquery.animateNumber.min.js",
        "public/js/bootstrap-datepicker.js",
        // "public/js/jquery.timepicker.min.js",
        "public/js/scrollax.min.js",
        "public/js/main.js"
      ])
      .pipe(concat("app.js"))
      .pipe(uglify())
      .pipe(gulp.dest("./public/js"));
  })
);
gulp.task("default", gulp.series(["script", "css"]));
