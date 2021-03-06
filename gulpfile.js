const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');
const runSequence = require('run-sequence');
const merge = require('gulp-merge-json');
const clean = require('gulp-clean');
var sass = require('node-sass');
var autoprefixer = require('gulp-autoprefixer');

const langs = ['pl', 'en'];

const styleProcessor = (stylePath, ext, styleFile, callback) => {
    if (ext[0] === '.scss') {
        let sassObj = sass.renderSync({ file: stylePath });
        if (sassObj && sassObj['css']){
        styleFile = sassObj.css.toString('utf8');
        }
    }

    return callback(null, styleFile);
};

gulp.task('inline-build-templates', function() {
    return gulp.src(['./src/app/lib/**/*.ts'])
        .pipe(inlineNg2Template({
            target: 'es5',
            useRelativePaths: true,
            styleProcessor: styleProcessor
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-styles', function(callback) {
    return gulp.src('./src/styles/**/**.scss')
        .pipe(gulp.dest('./lib/styles'));
});

gulp.task('clear-lib-i18n', function() {
    return gulp.src('./lib/i18n', {read: false})
    .pipe(clean({force: true}));
})

gulp.task('copy-lib-i18n', function() {
    return langs.forEach(lang => {
        gulp.src('./src/app/lib/**/*/' + lang + '.json')
            .pipe(gulp.dest('./lib'));
    });
});

gulp.task('merge-lib-i18n', ['copy-lib-i18n'], function() {
    return langs.forEach(lang => {
        gulp.src('./src/app/lib/**/*/' + lang + '.json')
            .pipe(merge({
                fileName: lang + '.json',
                edit: (parsedJson, file) => {
                    if (parsedJson.someValue) {
                        delete parsedJson.otherValue;
                    }

                    return parsedJson;
                },
            }))
            .pipe(gulp.dest('./lib/i18n'));
    });
});

gulp.task('merge-i18n-from-lib', ['merge-lib-i18n'], function() {
    return langs.forEach(lang => {
        gulp.src(['./lib/i18n/' + lang + '.json', './src/assets/i18n/' + lang + '.json'])
            .pipe(merge({
                fileName: lang + '.json',
                edit: (parsedJson, file) => {
                    if (parsedJson.someValue) {
                        delete parsedJson.otherValue;
                    }

                    return parsedJson;
                },
            }))
            .pipe(gulp.dest('./src/assets/i18n'));
    });
});

