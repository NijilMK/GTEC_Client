import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, Type, forwardRef } from '@angular/core';
import { ControlValueAccessor, Form, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-SelectInput',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectInputComponent),
    }
  ]
})
export class SelectInputComponent implements ControlValueAccessor {

  value: any = null;
  disabled = false;
  @Input() f!: FormGroup;
  @Input() submitted = false;
  @Input() formLabel: string = '';
  @Input() formControlPath = '';
  @Input() models: any;
  @Input() Mandatory = false;
  @Input() isViewMode = false;
  @Output() onValueChange = new EventEmitter<Event>();

  onChange: OnChangeFn<string> = () => { };
  onTouch: OnTouchFn = () => { };

  constructor() { }

  getControl() {
    return this.f.get(this.formControlPath);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  OnValueChanged(event: any) {
    this.onChange(event.target.value);
    this.onValueChange.emit(event);
  }

  @HostListener("focusout")
  onFocusOut() {
    this.onTouch();
  }

  keyup(value: any) {
    this.value = value;
    this.onChange(this.value);
  }
}

type OnChangeFn<T> = (value: T) => void;
type OnTouchFn = () => void;
