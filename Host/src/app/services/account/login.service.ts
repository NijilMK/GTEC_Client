import { Injectable } from '@angular/core';
import { BasehttpService } from '../basehttp.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/auth.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BasehttpService
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


