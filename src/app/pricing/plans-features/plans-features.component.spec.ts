import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansFeaturesComponent } from './plans-features.component';

describe('PlansFeaturesComponent', () => {
  let component: PlansFeaturesComponent;
  let fixture: ComponentFixture<PlansFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
