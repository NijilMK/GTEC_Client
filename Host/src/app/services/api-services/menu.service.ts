import { Injectable } from '@angular/core';
import { UserTypeModel } from 'src/app/models/masters/company/user-type-model';
import { CrudService } from './crud.service';
import { ServiceLocator } from '../helpers/service-locator.service';
import { URLConstantService } from './url-constant.service';
import { MenuItem } from 'src/app/layouts/sidebar/menu.model';
import { MENU } from 'src/app/layouts/sidebar/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

userTypes!: UserTypeModel[];
_urlConstant : URLConstantService;
_crudService: CrudService;
// uerTypeURL = String(this._urlConstant.URLList.get('UserType'));

constructor() {
  this._urlConstant = ServiceLocator.injector.get(URLConstantService);
  this._crudService = ServiceLocator.injector.get(CrudService);
}

public readUserTypes(): Promise<UserTypeModel[]> {
{
    return new Promise((resolve, reject) => {
      this._crudService
        .getAll(String(this._urlConstant.URLList.get('UserType')))
        .subscribe({
          next: (val: any) => {
            this.userTypes = val.data;

            if(this.userTypes.length > 0)
            {
              //this.selectedUserType = this.userTypes[0];
              //this.showMenuSettings();
            }
            resolve(this.userTypes);
          },
          error: (error: any) => {
            throw(error);
          },
        });
    });
  }
}

}
