import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasehttpService } from './basehttp.service';
import { Observable } from 'rxjs';
import { Admission } from '../models/student/admissionModel';


@Injectable({
  providedIn: 'root'
})
export class AdmissionService extends BasehttpService{

  constructor(private _http: HttpClient)
  {
    super();

  }

  getAll(url: string,): Observable<Admission[]> {
    return this._http.get<Admission[]>(this.getFullURL(url) + '/GetAll', { headers: this.headers });
 }
}
