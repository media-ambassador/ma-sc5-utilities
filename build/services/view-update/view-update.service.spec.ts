import { TestBed, inject } from '@angular/core/testing';

import { MaSc5ViewUpdateService } from './view-update.service';

describe('ViewUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaSc5ViewUpdateService]
    });
  });

  it('should be created', inject([MaSc5ViewUpdateService], (service: MaSc5ViewUpdateService<any>) => {
    expect(service).toBeTruthy();
  }));
});
