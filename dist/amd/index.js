define(['exports', 'aurelia-pal', './aurelia-bootstrap-datepicker'], function (exports, _aureliaPal, _aureliaBootstrapDatepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = exports.AureliaBootstrapDatepicker = undefined;


  function configure(config) {
    config.globalResources(_aureliaPal.PLATFORM.moduleName('./aurelia-bootstrap-datepicker'));
  }

  exports.AureliaBootstrapDatepicker = _aureliaBootstrapDatepicker.AureliaBootstrapDatepicker;
  exports.configure = configure;
});