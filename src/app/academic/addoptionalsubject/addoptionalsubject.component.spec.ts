import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoptionalsubjectComponent } from './addoptionalsubject.component';

describe('AddoptionalsubjectComponent', () => {
  let component: AddoptionalsubjectComponent;
  let fixture: ComponentFixture<AddoptionalsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoptionalsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoptionalsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
