import { TestBed, inject } from '@angular/core/testing';

import { ApiUserService } from './api-user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUserService]
    });
  });

  it('should be created', inject([ApiUserService], (service: ApiUserService) => {
    expect(service).toBeTruthy();
  }));
});
