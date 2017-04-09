'use strict';

System.register(['aurelia-framework', 'bootstrap-datepicker'], function (_export, _context) {
  "use strict";

  var customElement, bindable, inject, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, AureliaBootstrapDatepicker;

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

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_bootstrapDatepicker) {}],
    execute: function () {
      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker = (_dec = customElement('bootstrap-datepicker'), _dec2 = bindable('value'), _dec3 = inject(Element), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function AureliaBootstrapDatepicker(element) {
          _classCallCheck(this, AureliaBootstrapDatepicker);

          _initDefineProp(this, 'dpOptions', _descriptor, this);

          this.element = element;
        }

        AureliaBootstrapDatepicker.prototype.attached = function attached() {
          var self = this;
          $(this.datepicker).datepicker(this.dpOptions).on('changeDate', function (e) {
            var changeDateEvent = new CustomEvent('changedate', { detail: { event: e }, bubbles: true });
            self.element.dispatchEvent(changeDateEvent);
          });
        };

        return AureliaBootstrapDatepicker;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'dpOptions', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('AureliaBootstrapDatepicker', AureliaBootstrapDatepicker);
    }
  };
});