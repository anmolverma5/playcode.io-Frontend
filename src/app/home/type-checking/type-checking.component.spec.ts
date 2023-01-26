import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCheckingComponent } from './type-checking.component';

describe('TypeCheckingComponent', () => {
  let component: TypeCheckingComponent;
  let fixture: ComponentFixture<TypeCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeCheckingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
