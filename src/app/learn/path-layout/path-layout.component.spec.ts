import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathLayoutComponent } from './path-layout.component';

describe('PathLayoutComponent', () => {
  let component: PathLayoutComponent;
  let fixture: ComponentFixture<PathLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
