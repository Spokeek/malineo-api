"use strict";
const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require("gulp-nodemon");

gulp.task("default", function () {
    nodemon({
        script: "src/app.js"
    });
})