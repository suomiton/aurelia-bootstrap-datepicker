'use strict';

System.register(['aurelia-framework', 'aurelia-binding', 'bootstrap-datepicker', 'es6-object-assign'], function (_export, _context) {
  "use strict";

  var customElement, bindable, inject, TaskQueue, BindingEngine, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, id, defaultOptions, AureliaBootstrapDatepicker;

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
      inject = _aureliaFramework.inject;
      TaskQueue = _aureliaFramework.TaskQueue;
    }, function (_aureliaBinding) {
      BindingEngine = _aureliaBinding.BindingEngine;
    }, function (_bootstrapDatepicker) {}, function (_es6ObjectAssign) {}],
    execute: function () {
      id = 0;
      defaultOptions = {
        autoclose: true,
        placeholder: ''
      };

      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker = (_dec = customElement('bootstrap-datepicker'), _dec2 = inject(Element, BindingEngine, TaskQueue), _dec3 = bindable({ changeHandler: 'valueChanged' }), _dec(_class = _dec2(_class = (_class2 = function () {
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
            var date = _this2.value.toDate ? _this2.value.toDate() : _this2.value;
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
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'dpOptions', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker);
    }
  };
});