import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/auth.models';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../api-services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseHttpService
{

  constructor(private _http: HttpClient)
  {
    super();
  }

Login(userName:string, password:string) : Observable<any>
{
  const data ={'userName': userName, 'password': password}

  const body = JSON.stringify(data);

   return this._http.post(this.getFullURL("Auth/Login"), body, {headers: this.postHeader});
}

}


