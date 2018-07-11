import { TestBed, inject } from '@angular/core/testing';

import { MaSc5IdentityService } from './identity.service';

describe('IdentityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaSc5IdentityService]
    });
  });

  it('should be created', inject([MaSc5IdentityService], (service: MaSc5IdentityService) => {
    expect(service).toBeTruthy();
  }));
});
