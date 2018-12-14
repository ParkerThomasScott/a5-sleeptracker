import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightModalPage } from './night-modal.page';

describe('NightModalPage', () => {
  let component: NightModalPage;
  let fixture: ComponentFixture<NightModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
