import { TestBed } from '@angular/core/testing';

import { LibrarycardService } from './librarycard.service';

describe('LibrarycardService', () => {
  let service: LibrarycardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarycardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
