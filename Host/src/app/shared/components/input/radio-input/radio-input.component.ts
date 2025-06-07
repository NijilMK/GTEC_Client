import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { RequiredFormInputComponent } from '../required-form-input/required-form-input.component';

@Component({
  selector: 'app-radioInput',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css'],
  changeDetection:ChangeDetectionStrategy.Default,
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi :true,
      useExisting: forwardRef(() => RadioInputComponent),
    }
  ]
})
export class RadioInputComponent implements ControlValueAccessor  {

  @Input() f!:FormGroup;
  @Input() submitted!:boolean;
  @Input() formLabel:string ='';
  @Input() formControlPath = '';
  @Input() Mandatory:boolean = true;
  //@Input() formControlName:any;
  value:boolean = false;
  disabled:boolean = false;

  onChange: OnChangeFn<boolean> = () =>{};
  onTouch: OnTouchFn= () =>{};

  constructor() { }

  getControl()
  {
    return this.f.get(this.formControlPath);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: OnChangeFn<boolean>): void {
    this.onChange =fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  OnTextChange(event: any)
  {
    this.onChange(event.target.value);
  }

  @HostListener("focusout")
  onFocusOut()
  {
    this.onTouch();
  }

  keyup(value:any) {
    this.value = value;
    this.onChange(this.value);
  }

  handleSelected(value:any) {
    this.value =value;
  }
}

type OnChangeFn<T> = (value:T) => void;
type OnTouchFn = () => void;

