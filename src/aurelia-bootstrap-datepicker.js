import "./aurelia-bootstrap-datepicker3.css"

import {customElement, bindable, observable, inject, TaskQueue} from 'aurelia-framework';
import {BindingEngine} from 'aurelia-binding';
import 'bootstrap-datepicker';
import 'es6-object-assign';
import * as moment from 'moment';

let id = 0;
function getId() {
  id += 1;
  return id;
}

@customElement('bootstrap-datepicker')
@inject(Element, BindingEngine, TaskQueue)
export class AureliaBootstrapDatepicker {
  static defaultOptions = {
    autoclose: true,
    placeholder: '',
    format: 'm/d/yyyy'
  };


  @bindable value;
  @bindable dpOptions;
  @bindable placeholder;

  @observable inputValue;

  constructor(element, bindingEngine, taskQueue) {
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

    this.dpOptions = this.dpOptions || { };
    let parentElement = this.element.parentElement;
    if (!parentElement.id) {
      parentElement.id = `au-bootstrap-picker-host-${this.id}`;
    }

    this.options = Object.assign({}, AureliaBootstrapDatepicker.defaultOptions, {container: `#${parentElement.id}`}, this.dpOptions);

    this.__pickerElement
      .datepicker(this.options)
      .on('changeDate', (e) => {
        this.__internalUpdate(() => {
          let changeDateEvent = new CustomEvent('changedate', {detail: {event: e}, bubbles: true});
          this.element.dispatchEvent(changeDateEvent);
          this.value = this.__pickerElement.datepicker('getUTCDate');
          this.inputValue = this.__pickerElement.val();
        });
      });

    this.valueChanged();
  }

  bind() {
    this.placeholder = this.placeholder || '';
  }

  valueChanged() {
    this.__updateGuard(() => {
      // For null and undefined, we clear
      if (this.value === null || this.value === undefined) {
        this.__pickerElement.datepicker('setUTCDate', '');
        return;
      }

      // Try to parse the input with the specified format
      let date = moment.utc(this.value, this.options.format.toUpperCase()).toDate();
      if (date.toString() === "Invalid Date") {
        // If it fails, try without the format specifier
        date = moment.utc(this.value).toDate();
      }

      // If we're still invalid, clear everything
      if (date.toString() === "Invalid Date") {
        this.__pickerElement.datepicker('setUTCDate', '');
        return;
      }

      // ... and if not, we're good to go
      this.__pickerElement.datepicker('setUTCDate', date);
    });
  }

  inputValueChanged() {
    this.__updateGuard(() => {
      if (this.inputValue === '' && this.value !== null && this.value !== undefined) {
        this.value = null;
      }
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
}
