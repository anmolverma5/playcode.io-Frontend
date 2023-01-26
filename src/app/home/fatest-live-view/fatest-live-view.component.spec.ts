import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatestLiveViewComponent } from './fatest-live-view.component';

describe('FatestLiveViewComponent', () => {
  let component: FatestLiveViewComponent;
  let fixture: ComponentFixture<FatestLiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatestLiveViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatestLiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
