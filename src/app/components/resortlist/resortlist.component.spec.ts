/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResortlistComponent } from './resortlist.component';

describe('ResortlistComponent', () => {
  let component: ResortlistComponent;
  let fixture: ComponentFixture<ResortlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
