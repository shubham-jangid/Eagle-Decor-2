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
gulp.task("default", gulp.series(["css"]));
