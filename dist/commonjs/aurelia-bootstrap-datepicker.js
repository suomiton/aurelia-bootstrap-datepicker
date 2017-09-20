'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AureliaBootstrapDatepicker = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

var _aureliaFramework = require('aurelia-framework');

var _aureliaBinding = require('aurelia-binding');

require('bootstrap-datepicker');

require('es6-object-assign');

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var id = 0;
function getId() {
  id += 1;
  return id;
}

var AureliaBootstrapDatepicker = exports.AureliaBootstrapDatepicker = (_dec = (0, _aureliaFramework.customElement)('bootstrap-datepicker'), _dec2 = (0, _aureliaFramework.inject)(Element, _aureliaBinding.BindingEngine, _aureliaFramework.TaskQueue), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
  function AureliaBootstrapDatepicker(element, bindingEngine, taskQueue) {
    _classCallCheck(this, AureliaBootstrapDatepicker);

    _initDefineProp(this, 'value', _descriptor, this);

    _initDefineProp(this, 'dpOptions', _descriptor2, this);

    _initDefineProp(this, 'placeholder', _descriptor3, this);

    this.element = element;
    this.bindingEngine = bindingEngine;
    this.taskQueue = taskQueue;
    this.id = getId();
  }

  AureliaBootstrapDatepicker.setDefaultOptions = function setDefaultOptions(newDefaults) {
    AureliaBootstrapDatepicker.defaultOptions = Object.assign({}, AureliaBootstrapDatepicker.defaultOptions, newDefaults);
  };

  AureliaBootstrapDatepicker.getDefaultOptions = function getDefaultOptions() {
    return AureliaBootstrapDatepicker.defaultOptions;
  };

  AureliaBootstrapDatepicker.prototype.attached = function attached() {
    var _this = this;

    this.__pickerElement = $(this.datepicker);

    this.dpOptions = this.dpOptions || {};
    var parentElement = this.element.parentElement;
    if (!parentElement.id) {
      parentElement.id = 'au-bootstrap-picker-host-' + this.id;
    }

    var options = Object.assign({}, AureliaBootstrapDatepicker.defaultOptions, { container: '#' + parentElement.id }, this.dpOptions);

    this.__pickerElement.datepicker(options).on('changeDate', function (e) {
      _this.__internalUpdate(function () {
        var changeDateEvent = new CustomEvent('changedate', { detail: { event: e }, bubbles: true });
        _this.element.dispatchEvent(changeDateEvent);
        _this.value = _this.__pickerElement.datepicker('getUTCDate');
      });
    });

    this.valueChanged();
  };

  AureliaBootstrapDatepicker.prototype.bind = function bind() {
    this.placeholder = this.placeholder || '';
  };

  AureliaBootstrapDatepicker.prototype.valueChanged = function valueChanged() {
    var _this2 = this;

    this.__updateGuard(function () {
      var date = moment.utc(_this2.value).toDate();

      _this2.__pickerElement.datepicker('setUTCDate', date);
    });
  };

  AureliaBootstrapDatepicker.prototype.__internalUpdate = function __internalUpdate(fn) {
    this.__updatingInternalState__ = true;

    fn();
    this.taskQueue.flushMicroTaskQueue();

    this.__updatingInternalState__ = false;
  };

  AureliaBootstrapDatepicker.prototype.__updateGuard = function __updateGuard(fn) {
    if (this.__updatingInternalState__) {
      return;
    }

    fn();
  };

  return AureliaBootstrapDatepicker;
}(), _class3.defaultOptions = {
  autoclose: true,
  placeholder: ''
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'dpOptions', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class);