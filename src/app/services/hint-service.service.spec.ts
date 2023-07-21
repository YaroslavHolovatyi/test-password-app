import { TestBed } from '@angular/core/testing';

import { HintServiceService } from './hint-service.service';

describe('HintServiceService', () => {
  let service: HintServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HintServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
