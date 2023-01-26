import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJavascriptComponent } from './about-javascript.component';

describe('AboutJavascriptComponent', () => {
  let component: AboutJavascriptComponent;
  let fixture: ComponentFixture<AboutJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
