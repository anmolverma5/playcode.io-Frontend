import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewNewWindowComponent } from './preview-new-window.component';

describe('PreviewNewWindowComponent', () => {
  let component: PreviewNewWindowComponent;
  let fixture: ComponentFixture<PreviewNewWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewNewWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewNewWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
