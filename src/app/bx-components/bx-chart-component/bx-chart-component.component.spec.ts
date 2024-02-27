import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxChartComponentComponent } from './bx-chart-component.component';

describe('BxChartComponentComponent', () => {
  let component: BxChartComponentComponent;
  let fixture: ComponentFixture<BxChartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxChartComponentComponent]
    });
    fixture = TestBed.createComponent(BxChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
