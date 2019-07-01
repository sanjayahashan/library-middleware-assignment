import { TestBed } from '@angular/core/testing';

import { BorrowserviceService } from './borrowservice.service';

describe('BorrowserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowserviceService = TestBed.get(BorrowserviceService);
    expect(service).toBeTruthy();
  });
});
