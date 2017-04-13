import {customElement, bindable, inject} from 'aurelia-framework';
import {BindingEngine} from 'aurelia-binding';
import 'bootstrap-datepicker';

@customElement('bootstrap-datepicker')
@bindable('value')
@inject(Element, BindingEngine)
export class AureliaBootstrapDatepicker {
  @bindable dpOptions;

  constructor(element, bindingEngine) {
    this.element = element;
    this.bindingEngine = bindingEngine;
  }

  attached() {
    let pickerElement = $(this.datepicker);
    pickerElement.datepicker(this.dpOptions)
      .on('changeDate', (e) => {
        let changeDateEvent = new CustomEvent('changedate', {detail: {event: e}, bubbles: true});
        this.element.dispatchEvent(changeDateEvent);
        this.value = pickerElement.datepicker('getDate');
      });

    pickerElement.datepicker('setDate', this.value);
  }
}
