import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AddEditDialogbaseComponent } from './add-edit-dialog-base.component';
import { CompanyBase } from 'src/app/models/model-base';

@Component({
  selector: 'app-addeditdialogbase',
  template: ` <p>addeditdialogbase works!</p> `,
  styleUrls: [],
})

export class AddEditCompanyBaseComponent< model = CompanyBase> extends AddEditDialogbaseComponent<model> {

  constructor() {
    super();
  }

  // override UpdateFormValue() {
  //   this.form.value.CompanyId = this._localStorage.getCompany().Company.id;
  // }

  // setCompanyID(companyModel:CompanyBase)
  // {
  //   companyModel.companyId =this._localStorage.getCompany().Company.id;;
  // }

}


