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
        if (!pickerElement.updating) {
          this.value = pickerElement.datepicker('getDate');
        }
      });

    pickerElement.datepicker('setDate', this.value);

    this.changeSubscription = this.bindingEngine.propertyObserver(this, 'value')
      .subscribe((newValue, oldValue) => {
        pickerElement.updating = true;
        pickerElement.datepicker('setDate', newValue);
        pickerElement.updating = false;
      });
  }

  getTime(maybeDate) {
    if (maybeDate && maybeDate.getTime) {
      return maybeDate.getTime();
    }

    return null;
  }

  detached() {
    this.changeSubscription.dispose();
  }
}
