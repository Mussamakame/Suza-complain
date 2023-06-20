import { TestBed } from '@angular/core/testing';

import { DvcService } from './dvc.service';

describe('DvcService', () => {
  let service: DvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
