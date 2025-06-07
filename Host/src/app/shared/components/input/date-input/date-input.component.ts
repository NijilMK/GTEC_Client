import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OnChange } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-dateInput',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DateInputComponent),
    }
  ]
})
export class DateInputComponent implements ControlValueAccessor {

  @Input() f!: FormGroup;
  @Input() submitted = false;
  @Input() enableTime = false;
  @Input() formLabel: string = '';
  @Input() formControlPath = '';
  @Input() Mandatory: boolean = true;
  @Input() disabled: boolean = false;
  value = '';

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

  OnTextChange(event: any) {
    this.onChange(event.target.value);
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


