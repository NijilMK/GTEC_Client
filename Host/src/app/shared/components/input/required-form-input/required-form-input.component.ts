import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, Type, forwardRef } from '@angular/core';
import { ControlValueAccessor, Form, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OnChange } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-RequiredFormInput',
  templateUrl: './required-form-input.component.html',
  styleUrls: ['./required-form-input.component.css'],
  changeDetection:ChangeDetectionStrategy.Default,
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi :true,
      useExisting: forwardRef(() => RequiredFormInputComponent),
    }
  ]
})
export class RequiredFormInputComponent implements ControlValueAccessor {

  @Input() f!:FormGroup;
  @Input() submitted!:boolean;
  @Input() formLabel:string ='';
  @Input() formControlPath = '';
  @Input() Mandatory:boolean = true;
  @Input() isViewMode:boolean = false;
  @Input() onlyNumber:boolean = false;
  value = '';
  disabled:boolean = false;

  onChange: OnChangeFn<string> = () =>{};
  onTouch: OnTouchFn= () =>{};

  constructor() { }

  getControl() { 
    return this.f.get(this.formControlPath);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange =fn;
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

  keyup(value:any) {
    this.value = value;
    this.onChange(this.value);
  }

  keyPress(event: KeyboardEvent) {
    if(this.onlyNumber){
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
    console.log(this.getControl());
    
}
}

type OnChangeFn<T> = (value:T) => void;
type OnTouchFn = () => void;


