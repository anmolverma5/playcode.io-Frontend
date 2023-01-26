import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyFrontendComponent } from './ready-frontend.component';

describe('ReadyFrontendComponent', () => {
  let component: ReadyFrontendComponent;
  let fixture: ComponentFixture<ReadyFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyFrontendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
