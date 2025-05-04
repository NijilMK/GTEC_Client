/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UrlconstantService } from './urlconstant.service';

describe('Service: Urlconstant', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlconstantService]
    });
  });

  it('should ...', inject([UrlconstantService], (service: UrlconstantService) => {
    expect(service).toBeTruthy();
  }));
});
