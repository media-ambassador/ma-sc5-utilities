import { TestBed, inject } from '@angular/core/testing';

import { MaSc5ValidationService } from './validation.service';

describe('ValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaSc5ValidationService]
    });
  });

  it('should be created', inject([MaSc5ValidationService], (service: MaSc5ValidationService) => {
    expect(service).toBeTruthy();
  }));
});
