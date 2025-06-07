import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLConstantService } from './url-constant.service';
import { LocalStorageService } from '../uiservice/local-storage.service';
import { ServiceLocator } from '../helpers/ServiceLocator.service';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
_urlConstant : URLConstantService;
_store : LocalStorageService;
headers! : HttpHeaders;

server = "https://localhost:62749/";
auth = "659476889604ib26is5ods8ah9l";

 postHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      "Access-Control-Allow-Origin" : "*"
    });

constructor() {
  this._urlConstant = ServiceLocator.injector.get(URLConstantService);
  this._store = ServiceLocator.injector.get(LocalStorageService);
  this.server = this._urlConstant.getServerURL();

   this.headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth,
      });
      this.headers.append('Content-Type', 'application/json; charset=utf8')
        .append('Access-Control-Allow-Headers', 'Content-Type')
 }

 getFullURL(urlpath:string)
 {
    if(urlpath != "Auth/Login")
    {
       if (this._store.getUser() === null) {
          window.location.href = "/auth/login"
        }
    }

   return this.server+urlpath;
 }

}
