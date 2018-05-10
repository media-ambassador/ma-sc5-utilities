import { TestBed, inject } from '@angular/core/testing';

import { MaSc5UtilsService } from './sc5-utils.service';

describe('Sc5UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaSc5UtilsService]
    });
  });

  it('should be created', inject([MaSc5UtilsService], (service: MaSc5UtilsService) => {
    expect(service).toBeTruthy();
  }));
});
