import { Injectable } from '@angular/core';
import { UrlconstantService } from './urlconstant.service';
import { HttpHeaders } from '@angular/common/http';
import { ServiceLocator } from './helpers/ServiceLocator.service';


@Injectable({
  providedIn: 'root'
})


  @Injectable({
    providedIn: 'root'
  })
  export class BasehttpService {

    _urlConstant: UrlconstantService;
    headers!: HttpHeaders;
    //  server = "";
    server = "https://localhost:7052/";
    auth = "65fhsgdjhfgas%^$*&RHVSDFKU8ah9l";
    postHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth,
      "Access-Control-Allow-Origin" : "*"
    });

    constructor() {

      this._urlConstant = ServiceLocator.injector.get(UrlconstantService);

      this.server = this._urlConstant.getServerURL();

      // this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth);
      // this.headers = new HttpHeaders().set('Company', this.company);
      this.headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth,
      });
      this.headers.append('Content-Type', 'application/json; charset=utf8')
        .append('Access-Control-Allow-Headers', 'Content-Type')
      // .append('Access-Control-Allow-Methods', 'GET')
      // .append('Access-Control-Allow-Origin', '*');
    }

    getFullURL(urlpath: string) {
      // this.headers.set('Company', this.company);
      // if (urlpath != "auth/Login") {
      //   if (this._store.getUser() === null) {
      //     console.log('here');

      //     window.location.href = "/auth/login";
      //   }
      // }
      return this.server + urlpath;
    }

  }
