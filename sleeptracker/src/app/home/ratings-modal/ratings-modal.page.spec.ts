import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsModalPage } from './ratings-modal.page';

describe('RatingsModalPage', () => {
  let component: RatingsModalPage;
  let fixture: ComponentFixture<RatingsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
