import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedDevsComponent } from './trusted-devs.component';

describe('TrustedDevsComponent', () => {
  let component: TrustedDevsComponent;
  let fixture: ComponentFixture<TrustedDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedDevsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
