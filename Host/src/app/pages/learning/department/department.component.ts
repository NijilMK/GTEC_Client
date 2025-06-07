import { Component, OnInit, Renderer2 } from '@angular/core';
import { DepartmentModel } from 'src/app/models/departmentModel';
import { ListBaseComponent } from 'src/app/shared/base/list-base/list-base.component';

@Component({
  selector: 'app-country',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent extends ListBaseComponent<DepartmentModel> implements OnInit {

  constructor(private renderer2: Renderer2)
  {
    super(renderer2);
    this.setURL(String(this._urlConstant.URLList.get('Country')));
  }

  override getColumns() {
    return [
      {
        title: 'Id',
        data: 'id',
      },
      {
        title: 'Country Name',
        data: 'name',
      },
      {
        title: 'Language',
        data: 'language',
      },
      {
        title: 'Currency',
        data: 'currency.currencyName',
      },

    ];
  }
}
