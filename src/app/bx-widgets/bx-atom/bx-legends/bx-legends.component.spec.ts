import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxLegendsComponent } from './bx-legends.component';

describe('BxLegendsComponent', () => {
  let component: BxLegendsComponent;
  let fixture: ComponentFixture<BxLegendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BxLegendsComponent]
    });
    fixture = TestBed.createComponent(BxLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
