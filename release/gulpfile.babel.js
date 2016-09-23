import gulp from 'gulp';
import watch from 'gulp-watch';
import webpack from 'webpack-stream';
import {development, production} from './webpack.config';
var Server = require('karma').Server;


gulp.task('default', ['build']);

gulp.task('dev', () => {
  return gulp.src('src/main.js')
    .pipe(webpack(development))
    .pipe(gulp.dest('build/'));
});

gulp.task('build', () => {
  return gulp.src('src/main.js')
    .pipe(webpack(production))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['dev'], (cb) => {
  watch('src/**/*', () => {
    gulp.start("dev");
  });
});

gulp.task('test', (done) => {
  var server = new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
