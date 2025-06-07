import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DepartmentModel } from 'src/app/models/departmentModel';
import { AddEditDialogbaseComponent } from 'src/app/shared/base/dialog-base/add-edit-dialog-base/add-edit-dialog-base.component';

@Component({
  selector: 'app-addEditDepartment',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css'],
})
export class AddEditDepartmentComponent
  extends AddEditDialogbaseComponent<DepartmentModel>
  implements OnInit
{
  constructor(private builder: FormBuilder) {
    super();
    this.setURL(String(this._urlConstant.URLList.get('Department')));
    this.form = this.builder.group({
      name: new FormControl('', Validators.required),
    });
  }

  override getDefaultModelObject(): any {
    return new DepartmentModel();
  }

  override ngOnInit(): void {
  }

  override UpdateFormValue() {
    const item = this.data as DepartmentModel;

    item.name = this.form.value.name;
  }

  override getItemName(): string {
    return "MENUITEMS.APPS.LIST.DEPARTMENT";
  }

  ngOnDestroy() {  }
}
