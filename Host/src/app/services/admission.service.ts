import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admission } from '../models/student/admissionModel';
import { BaseHttpService } from './api-services/base-http.service';


@Injectable({
  providedIn: 'root'
})
export class AdmissionService extends BaseHttpService{

  constructor(private _http: HttpClient)
  {
    super();

  }

  getAll(url: string,): Observable<Admission[]> {
    return this._http.get<Admission[]>(this.getFullURL(url) + '/GetAll', { headers: this.headers });
 }
}
