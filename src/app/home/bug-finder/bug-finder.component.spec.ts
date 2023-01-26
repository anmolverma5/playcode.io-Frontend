import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugFinderComponent } from './bug-finder.component';

describe('BugFinderComponent', () => {
  let component: BugFinderComponent;
  let fixture: ComponentFixture<BugFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
