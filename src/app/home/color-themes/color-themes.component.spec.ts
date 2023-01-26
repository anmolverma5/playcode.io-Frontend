import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemesComponent } from './color-themes.component';

describe('ColorThemesComponent', () => {
  let component: ColorThemesComponent;
  let fixture: ComponentFixture<ColorThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorThemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
