import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocator
{
  static injector: Injector;

  constructor() {
 }

}
