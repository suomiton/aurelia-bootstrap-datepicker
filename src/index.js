import { PLATFORM } from 'aurelia-pal';
import { AureliaBootstrapDatepicker } from './aurelia-bootstrap-datepicker';

function configure(config) {
  config.globalResources(PLATFORM.moduleName('./aurelia-bootstrap-datepicker'));
}

export {
  AureliaBootstrapDatepicker,
  configure
};

