import { TestBed } from '@angular/core/testing';

import { ModuleStateService } from './module-state.service';

describe('ModuleStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleStateService = TestBed.get(ModuleStateService);
    expect(service).toBeTruthy();
  });
});
