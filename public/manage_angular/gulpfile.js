var gulp = require('gulp'),
    g = require('gulp-load-plugins')({lazy: false}),
    es = require('event-stream'),
    series = require('stream-series'),
    mainBowerFiles = require('main-bower-files');

var option = {
    less: {
        src: ['app/app-less/app.less', 'app/app-less/czx_layout.less'],
        filePath: "app/asset/styles"
    },
    scripts: {
        src: ['']
    }
};

var handleError = function(err) {
    g.util.beep(); /*发出滴声提示*/
    g.util.log(err).toString();/*输出错误信息*/
}
var gulpfiles = {
    lessToCss: function() {
        var src = arguments[0], filePath = arguments[1];/*第一个参数为需要编译的Less文件名，第二个参数为编译后的Less文件所放置的文件夹名*/
        return gulp.src(src)
            .pipe(g.plumber({errorHandler: handleError}))/*less文件错误时不退出watch服务，同时打印出错误信息*/
            .pipe(g.less())
            .pipe(gulp.dest(filePath));
    }
};

/*
*   JS
* */
/*index.html inject css and js*/
var appFiles = function() {
    var files = [
        'app/app.js',
        '!app/**/*.js',
        'app/html/**/*.js'
    ];
    return gulp.src(files, {read: false})  // gulp-angular-filesort depends on file contents, so don't use {read: false} here
        .pipe(g.angularFilesort())
        .pipe(gulp.dest('./dist'));
};
gulp.task('index', function() {
    var opt = {read: false};
    //It's not necessary to read the files, we're only after their paths:
    var cssFiles = gulp.src('app/**/*.css', {read: false})
                    .pipe(gulp.dest('./dist'));

    gulp.src('./app/index.html')
        .pipe(g.debug())
        .pipe(g.inject(
            gulp.src(mainBowerFiles(), opt, {name: 'bower'})
        ))
        .pipe(g.inject(es.merge(
            cssFiles,
            appFiles()
        )))
        .pipe(gulp.dest('./dist'));
});

/*
*   CSS
* */
/*compile less to css*/
gulp.task('builtCSS', function() {
    gulpfiles.lessToCss(option.less.src, option.less.filePath);
});
/*watch the less change*/
gulp.task('watch', ['builtCSS'], function() {
    gulp.watch('app/app-less/*.less', ['builtCSS']);
});

gulp.task('serve', ['index', 'watch']);