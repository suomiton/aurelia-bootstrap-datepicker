'use strict';

System.register(['aurelia-framework', 'aurelia-binding', 'bootstrap-datepicker', 'es6-object-assign', 'moment'], function (_export, _context) {
  "use strict";

  var customElement, bindable, observable, inject, TaskQueue, BindingEngine, moment, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp, id, AureliaBootstrapDatepicker;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function getId() {
    id += 1;
    return id;
  }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      observable = _aureliaFramework.observable;
      inject = _aureliaFramework.inject;
      TaskQueue = _aureliaFramework.TaskQueue;
    }, function (_aureliaBinding) {
      BindingEngine = _aureliaBinding.BindingEngine;
    }, function (_bootstrapDatepicker) {}, function (_es6ObjectAssign) {}, function (_moment) {
      moment = _moment;
    }],
    execute: function () {
      id = 0;

      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker = (_dec = customElement('bootstrap-datepicker'), _dec2 = inject(Element, BindingEngine, TaskQueue), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
        function AureliaBootstrapDatepicker(element, bindingEngine, taskQueue) {
          _classCallCheck(this, AureliaBootstrapDatepicker);

          _initDefineProp(this, 'value', _descriptor, this);

          _initDefineProp(this, 'dpOptions', _descriptor2, this);

          _initDefineProp(this, 'placeholder', _descriptor3, this);

          _initDefineProp(this, 'inputValue', _descriptor4, this);

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

          this.options = Object.assign({}, AureliaBootstrapDatepicker.defaultOptions, { container: '#' + parentElement.id }, this.dpOptions);

          this.__pickerElement.datepicker(this.options).on('changeDate', function (e) {
            _this.__internalUpdate(function () {
              var changeDateEvent = new CustomEvent('changedate', { detail: { event: e }, bubbles: true });
              _this.element.dispatchEvent(changeDateEvent);
              _this.value = _this.__pickerElement.datepicker('getUTCDate');
              _this.inputValue = _this.__pickerElement.val();
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
            if (_this2.value === null || _this2.value === undefined) {
              _this2.__pickerElement.datepicker('setUTCDate', '');
              return;
            }

            var date = moment.utc(_this2.value, _this2.options.format.toUpperCase()).toDate();
            if (date.toString() === "Invalid Date") {
              date = moment.utc(_this2.value).toDate();
            }

            if (date.toString() === "Invalid Date") {
              _this2.__pickerElement.datepicker('setUTCDate', '');
              return;
            }

            _this2.__pickerElement.datepicker('setUTCDate', date);
          });
        };

        AureliaBootstrapDatepicker.prototype.inputValueChanged = function inputValueChanged() {
          var _this3 = this;

          this.__updateGuard(function () {
            if (_this3.inputValue === '' && _this3.value !== null && _this3.value !== undefined) {
              _this3.value = null;
            }
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
        placeholder: '',
        format: 'm/d/yyyy'
      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'dpOptions', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'inputValue', [observable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker);
    }
  };
});