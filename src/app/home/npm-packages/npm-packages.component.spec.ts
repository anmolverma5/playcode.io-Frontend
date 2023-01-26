import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmPackagesComponent } from './npm-packages.component';

describe('NpmPackagesComponent', () => {
  let component: NpmPackagesComponent;
  let fixture: ComponentFixture<NpmPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpmPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpmPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
