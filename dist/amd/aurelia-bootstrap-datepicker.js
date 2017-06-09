define(['exports', 'aurelia-framework', 'aurelia-binding', 'bootstrap-datepicker', 'es6-object-assign'], function (exports, _aureliaFramework, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AureliaBootstrapDatepicker = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var id = 0;
  function getId() {
    id += 1;
    return id;
  }

  var defaultOptions = {
    autoclose: true,
    placeholder: ''
  };

  var AureliaBootstrapDatepicker = exports.AureliaBootstrapDatepicker = (_dec = (0, _aureliaFramework.customElement)('bootstrap-datepicker'), _dec2 = (0, _aureliaFramework.inject)(Element, _aureliaBinding.BindingEngine, _aureliaFramework.TaskQueue), _dec3 = (0, _aureliaFramework.bindable)('value', 'dpOptions', 'placeholder'), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function AureliaBootstrapDatepicker(element, bindingEngine, taskQueue) {
      _classCallCheck(this, AureliaBootstrapDatepicker);

      this.element = element;
      this.bindingEngine = bindingEngine;
      this.taskQueue = taskQueue;
      this.id = getId();
    }

    AureliaBootstrapDatepicker.prototype.attached = function attached() {
      var _this = this;

      this.__pickerElement = $(this.datepicker);

      this.dpOptions = this.dpOptions || {};
      var parentElement = this.element.parentElement;
      if (!parentElement.id) {
        parentElement.id = 'au-bootstrap-picker-host-' + this.id;
      }

      var options = Object.assign({}, defaultOptions, { container: '#' + parentElement.id }, this.dpOptions);

      this.__pickerElement.datepicker(options).on('changeDate', function (e) {
        _this.__internalUpdate(function () {
          var changeDateEvent = new CustomEvent('changedate', { detail: { event: e }, bubbles: true });
          _this.element.dispatchEvent(changeDateEvent);
          _this.value = _this.__pickerElement.datepicker('getDate');
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
        var date = _this2.value && _this2.value.toDate ? _this2.value.toDate() : _this2.value;
        _this2.__pickerElement.datepicker('setDate', date);
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
  }()) || _class) || _class) || _class);
});