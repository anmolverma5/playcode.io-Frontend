import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPathComponent } from './frontend-path.component';

describe('FrontendPathComponent', () => {
  let component: FrontendPathComponent;
  let fixture: ComponentFixture<FrontendPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
