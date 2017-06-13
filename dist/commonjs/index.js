'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = exports.AureliaBootstrapDatepicker = undefined;

var _aureliaPal = require('aurelia-pal');

var _aureliaBootstrapDatepicker = require('./aurelia-bootstrap-datepicker');

function configure(config) {
  config.globalResources(_aureliaPal.PLATFORM.moduleName('./aurelia-bootstrap-datepicker'));
}

exports.AureliaBootstrapDatepicker = _aureliaBootstrapDatepicker.AureliaBootstrapDatepicker;
exports.configure = configure;