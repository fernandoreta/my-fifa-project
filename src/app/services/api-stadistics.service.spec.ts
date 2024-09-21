import { TestBed } from '@angular/core/testing';

import { ApiStadisticsService } from './api-stadistics.service';

describe('ApiStadisticsService', () => {
  let service: ApiStadisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStadisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
