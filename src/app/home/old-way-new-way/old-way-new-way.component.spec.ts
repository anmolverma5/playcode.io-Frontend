import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldWayNewWayComponent } from './old-way-new-way.component';

describe('OldWayNewWayComponent', () => {
  let component: OldWayNewWayComponent;
  let fixture: ComponentFixture<OldWayNewWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldWayNewWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldWayNewWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
