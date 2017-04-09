var path = require('path');
var pickerPath = require.resolve('bootstrap-datepicker');
var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: ['styles/**/*.css', path.join(path.dirname(pickerPath), '../css/bootstrap-datepicker3.css')],
  output: outputRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
