import { TestBed } from '@angular/core/testing';

import { VcService } from './vc.service';

describe('VcService', () => {
  let service: VcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
