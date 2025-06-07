import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/api-services/crud.service';
import { DialogBaseComponent } from '../dialogbase.component';
import { ModelBase } from 'src/app/models/model-base';
import { ServiceLocator } from 'src/app/services/helpers/ServiceLocator.service';

@Component({
  selector: 'app-addeditdialogbase',
  template: ` <p>addeditdialogbase works!</p> `,
  styleUrls: [],
})

export class AddEditDialogbaseComponent<model = ModelBase>
  extends DialogBaseComponent {

  submitted = false;
  isEdit = false;
  isView = false;
  url = '';
  _crudService!: CrudService;
  editData: any;
  form!: FormGroup;
  @Input() data!: model;
  @Input() title!: string;
  @ViewChild('mainView') mainView!: ElementRef;

  constructor() {
    super();
    this._crudService = ServiceLocator.injector.get(CrudService);
    this.title = this.getItemName();
  }

  ngOnInit() { }

  get registerFormControl() {
    return this.form.controls;
  }

  setURL(url: string) {
    this.url = url;
  }

  setModel(data: any) {
    this.resetForm();
    this.data = data;
    this.patchFormValues(this.data);
    this.isEdit = true;
    this.title = this.getItemName();
  }

  patchFormValues(data: any) {
    this.form.patchValue(data);
  }

  reSetModel() {
    this.data = this.getDefaultModelObject();
    this.resetForm();
    this.isEdit = false;
    this.isView = false;
    this.title = this.getItemName();
    this.setDefaultFocus();
  }

  getDefaultModelObject(): any {
    throw new Error("Required Override");
  }

  setDefaultFocus() { }

  resetForm() {
    this.form.reset();
    this.submitted = false;
  }

  CancelClick() {
    this.onHideClick.emit({ status: false });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  OnSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();
    this.UpdateFormValue();
    if (this.form.valid) {
      this._crudService.add(this.url, this.data).subscribe({
        next: (val: any) => {
          if (val.success === true) {
            this._uiService.ShowSaveSuccessAlert(this._translate);
            this.resetForm();
            this.onHideClick.emit({ status: true });
          } else {
            this._uiService.ShowErrorAlert(val.message, this._translate);
          }
          this.submitted = false;
        },
        error: (error: any) => {
          this.LogError(error);
          this.submitted = false;
        },
      });
    } else {
      console.log('Form Invalid!');
    }
  }

  UpdateFormValue() { }

  getItemName() {
    return 'MENUITEMS.COLUMNS.LIST.ITEM';
  }

  showModel(modal: any) {
    modal?.show();
    if (this.mainView) {
      this.mainView.nativeElement.style.opacity = .5;
      this.mainView.nativeElement.style.disable = true;
    }
  }

  hideModel(modal: any) {
    modal?.hide();
    if (this.mainView) {
      this.mainView.nativeElement.style.opacity = 1;
      this.mainView.nativeElement.style.disable = false;
    }
  }
}

class Factory {
  create<T>(type: (new () => T)): T {
    return new type();
  }
}
