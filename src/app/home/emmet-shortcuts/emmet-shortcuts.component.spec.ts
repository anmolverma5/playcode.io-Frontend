import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmetShortcutsComponent } from './emmet-shortcuts.component';

describe('EmmetShortcutsComponent', () => {
  let component: EmmetShortcutsComponent;
  let fixture: ComponentFixture<EmmetShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmmetShortcutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmmetShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
