import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptPlaygroundComponent } from './javascript-playground.component';

describe('JavascriptPlaygroundComponent', () => {
  let component: JavascriptPlaygroundComponent;
  let fixture: ComponentFixture<JavascriptPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
