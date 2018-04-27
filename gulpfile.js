const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');
var runSequence = require('run-sequence');

gulp.task('inline-build-templates', function() {
    return gulp.src(['./src/app/core/**/*.ts', './src/app/shared/**/*.ts', '!./src/app/**/*.spec.ts'])
        .pipe(inlineNg2Template({
            target: 'es5',
            useRelativePaths: true
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-styles', function(callback) {
    return gulp.src('./src/styles/**/**.scss')
        .pipe(gulp.dest('./lib/styles'));
});