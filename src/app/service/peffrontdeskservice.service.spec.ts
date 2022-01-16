import { TestBed } from '@angular/core/testing';

import { PeffrontdeskserviceService } from './peffrontdeskservice.service';

describe('PeffrontdeskserviceService', () => {
  let service: PeffrontdeskserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeffrontdeskserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
