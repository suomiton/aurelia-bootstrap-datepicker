var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { customElement, bindable, inject, TaskQueue } from 'aurelia-framework';
import { BindingEngine } from 'aurelia-binding';
import 'bootstrap-datepicker';
import 'es6-object-assign';
import * as moment from 'moment';

let id = 0;
function getId() {
  id += 1;
  return id;
}

export let AureliaBootstrapDatepicker = (_dec = customElement('bootstrap-datepicker'), _dec2 = inject(Element, BindingEngine, TaskQueue), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class AureliaBootstrapDatepicker {

  constructor(element, bindingEngine, taskQueue) {
    _initDefineProp(this, 'value', _descriptor, this);

    _initDefineProp(this, 'dpOptions', _descriptor2, this);

    _initDefineProp(this, 'placeholder', _descriptor3, this);

    this.element = element;
    this.bindingEngine = bindingEngine;
    this.taskQueue = taskQueue;
    this.id = getId();
  }

  static setDefaultOptions(newDefaults) {
    AureliaBootstrapDatepicker.defaultOptions = Object.assign({}, AureliaBootstrapDatepicker.defaultOptions, newDefaults);
  }

  static getDefaultOptions() {
    return AureliaBootstrapDatepicker.defaultOptions;
  }

  attached() {
    this.__pickerElement = $(this.datepicker);

    this.dpOptions = this.dpOptions || {};
    let parentElement = this.element.parentElement;
    if (!parentElement.id) {
      parentElement.id = `au-bootstrap-picker-host-${this.id}`;
    }

    this.options = Object.assign({}, AureliaBootstrapDatepicker.defaultOptions, { container: `#${parentElement.id}` }, this.dpOptions);

    this.__pickerElement.datepicker(this.options).on('changeDate', e => {
      this.__internalUpdate(() => {
        let changeDateEvent = new CustomEvent('changedate', { detail: { event: e }, bubbles: true });
        this.element.dispatchEvent(changeDateEvent);
        this.value = this.__pickerElement.datepicker('getUTCDate');
      });
    });

    this.valueChanged();
  }

  bind() {
    this.placeholder = this.placeholder || '';
  }

  valueChanged() {
    this.__updateGuard(() => {
      let date = moment.utc(this.value, this.options.format.toUpperCase()).toDate();

      this.__pickerElement.datepicker('setUTCDate', date);
    });
  }

  __internalUpdate(fn) {
    this.__updatingInternalState__ = true;

    fn();
    this.taskQueue.flushMicroTaskQueue();

    this.__updatingInternalState__ = false;
  }

  __updateGuard(fn) {
    if (this.__updatingInternalState__) {
      return;
    }

    fn();
  }
}, _class3.defaultOptions = {
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
})), _class2)) || _class) || _class);