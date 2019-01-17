import { TestBed, async, inject } from '@angular/core/testing';

import { WeatherGuardGuard } from './weather-guard.guard';

describe('WeatherGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherGuardGuard]
    });
  });

  it('should ...', inject([WeatherGuardGuard], (guard: WeatherGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
