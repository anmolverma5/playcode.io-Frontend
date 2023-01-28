import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSignupComponent } from './header-signup.component';

describe('HeaderSignupComponent', () => {
  let component: HeaderSignupComponent;
  let fixture: ComponentFixture<HeaderSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
