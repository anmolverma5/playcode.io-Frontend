import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentOnHoverComponent } from './document-on-hover.component';

describe('DocumentOnHoverComponent', () => {
  let component: DocumentOnHoverComponent;
  let fixture: ComponentFixture<DocumentOnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentOnHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
