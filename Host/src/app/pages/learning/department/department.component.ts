import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { DepartmentModel } from 'src/app/models/departmentModel';
import { GenericApiService } from 'src/app/services/api-services/genericApi.service';
import { ListBaseComponent } from 'src/app/shared/base/list-base/list-base.component';

@Component({
  selector: 'app-country',
   template: `
    <app-crud-page
      [columns]="['name']"
      [modelName]="'Department'"
      [apiService]="departmentService">
    </app-crud-page>
  `
})
export class DepartmentComponent extends ListBaseComponent<DepartmentModel> implements OnInit {

   departmentService: GenericApiService<DepartmentModel>;

  constructor(private renderer2: Renderer2, http: HttpClient)
  {
    super(renderer2);
     this.departmentService = new GenericApiService<DepartmentModel>(http);
  }
  //this.setURL(String(this._urlConstant.URLList.get('Department')));
}




