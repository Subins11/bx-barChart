import { TestBed } from '@angular/core/testing';

import { BxBarChartService } from './bx-bar-chart.service';

describe('BxBarChartService', () => {
  let service: BxBarChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BxBarChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
