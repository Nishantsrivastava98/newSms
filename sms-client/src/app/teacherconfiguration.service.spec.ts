import { TestBed } from '@angular/core/testing';

import { TeacherconfigurationService } from './teacherconfiguration.service';

describe('TeacherconfigurationService', () => {
  let service: TeacherconfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherconfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
