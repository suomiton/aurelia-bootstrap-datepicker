'use strict';

System.register(['aurelia-pal', './aurelia-bootstrap-datepicker'], function (_export, _context) {
  "use strict";

  var PLATFORM, AureliaBootstrapDatepicker;


  function configure(config) {
    config.globalResources(PLATFORM.moduleName('./aurelia-bootstrap-datepicker'));
  }

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaBootstrapDatepicker) {
      AureliaBootstrapDatepicker = _aureliaBootstrapDatepicker.AureliaBootstrapDatepicker;
    }],
    execute: function () {
      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker);

      _export('configure', configure);
    }
  };
});