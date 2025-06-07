import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService extends BaseHttpService{

  constructor(private _http:HttpClient)
  {
    super();
  }

  add(url: string, data:any) : Observable<any>
  {
     return this._http.post(this.getFullURL(url), data, {headers: this.headers});
  }

  getAll(url: string,) : Observable<any>
  {
     return this._http.get(this.getFullURL(url)+'/GetAll', {headers: this.headers});
  }
  getUrl (url: string) : Observable<any>
  {
     return this._http.get(this.getFullURL(url) , {headers: this.headers});
  }
  getByID(url: string) : Observable<any>
  {
     return this._http.get(this.getFullURL(url), {headers: this.headers});
  }

  getByMainID(url: string) : Observable<any>
  {
     return this._http.get(this.getFullURL(url), {headers: this.headers});
  }


  deleteByID(url: string) : Observable<any>
  {
     return this._http.get(this.getFullURL(url), {headers: this.headers});
  }

  GetPaginated(url: string, data: any, includeEndpoint: boolean = true): Observable<any> {
   const endpoint = includeEndpoint ? '/GetPaginatedData' : '';
   const body = JSON.stringify(data);
   return this._http.post(this.getFullURL(url) + endpoint, body, { headers: this.postHeader });
 }

  delete(url: string, id:number) : Observable<any>
  {
     return this._http.delete(this.getFullURL(url)+'?id='+id, {headers: this.headers});
  }

  customeDelete(url: string, id: number): Observable<any> {
   return this._http.delete(this.getFullURL(url)+'?id='+id, {headers: this.headers});

 }

  update(url: string, id:number, data:any) : Observable<any>
  {
     return this._http.post(this.getFullURL(url), data,{headers: this.headers});
  }

  Search(url: string, data:string) : Observable<any>
  {
    const body = JSON.stringify(data);
     return this._http.post(this.getFullURL(url)+ 'Search='+data,body,  {headers: this.postHeader});
  }


  generatePDF(url: string, mainId: string): Observable<Blob> 
  {
   
   //return this._http.get(url, { responseType: 'blob' , headers: this.headers});
   return this._http.get(this.getFullURL(url)+'/Generatepdf?MainId='+mainId, { responseType: 'blob' , headers: this.headers })

   }

   generateCartonSlip(url: string, mainId: string, cartonNumber: number)
   {
      return this._http.get(this.getFullURL(url)+'/GenerateCartonSlips?MainId='+mainId+'&cartonNumber='+cartonNumber, { responseType: 'blob' , headers: this.headers })

   }
   
}

