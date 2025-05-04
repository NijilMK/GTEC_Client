import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  @Injectable({
    providedIn: 'root'
  })
  export class UrlconstantService {

    URLList = new Map<string, string>();

    constructor() {
      this.URLList.set('userLogin', 'Auth/login');
    }

    getServerURL(): string {
      return "https://localhost:7052/";
      //return "https://yerzapi.alakode.in/api/";
    }

    getUploadedURL() {
      return this.getServerURL().replace('api/','') + "UploadedFiles/";
    }
  }

