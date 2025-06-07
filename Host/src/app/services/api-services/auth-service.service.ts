import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService extends BaseHttpService{

constructor(private _http:HttpClient) {
  super();
    //this.setURL("auth/Login");
}

Login(userName:string, password:string) : Observable<any>
{
  const data ={'userName': userName, 'password': password}

  const body = JSON.stringify(data);

   return this._http.post(this.getFullURL("auth/Login"), body, {headers: this.postHeader});
}

}
