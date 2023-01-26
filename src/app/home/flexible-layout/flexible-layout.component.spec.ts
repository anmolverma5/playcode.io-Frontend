import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleLayoutComponent } from './flexible-layout.component';

describe('FlexibleLayoutComponent', () => {
  let component: FlexibleLayoutComponent;
  let fixture: ComponentFixture<FlexibleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexibleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexibleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
