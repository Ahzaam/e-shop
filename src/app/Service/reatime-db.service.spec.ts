import { TestBed } from '@angular/core/testing';

import { ReatimeDBService } from './reatime-db.service';

describe('ReatimeDBService', () => {
  let service: ReatimeDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReatimeDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
