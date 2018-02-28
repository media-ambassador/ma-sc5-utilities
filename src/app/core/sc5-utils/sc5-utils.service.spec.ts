import { TestBed, inject } from '@angular/core/testing';

import { Sc5UtilsService } from './sc5-utils.service';

describe('Sc5UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sc5UtilsService]
    });
  });

  it('should be created', inject([Sc5UtilsService], (service: Sc5UtilsService) => {
    expect(service).toBeTruthy();
  }));
});
