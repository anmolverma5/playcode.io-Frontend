import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAutocompleteComponent } from './code-autocomplete.component';

describe('CodeAutocompleteComponent', () => {
  let component: CodeAutocompleteComponent;
  let fixture: ComponentFixture<CodeAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
