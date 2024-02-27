import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxBarGraphComponent } from './bx-bar-graph.component';

describe('BxBarGraphComponent', () => {
  let component: BxBarGraphComponent;
  let fixture: ComponentFixture<BxBarGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxBarGraphComponent]
    });
    fixture = TestBed.createComponent(BxBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
