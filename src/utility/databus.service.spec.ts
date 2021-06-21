import { TestBed } from '@angular/core/testing';

import { DatabusService } from './databus.service';

describe('DatabusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabusService = TestBed.get(DatabusService);
    expect(service).toBeTruthy();
  });
});
