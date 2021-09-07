import { TestBed } from '@angular/core/testing';

import { SailingService } from './sailing.service';

xdescribe('SailingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SailingService = TestBed.get(SailingService);
    expect(service).toBeTruthy();
  });
});
