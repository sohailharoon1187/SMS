import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeexamattendanceComponent } from './takeexamattendance.component';

describe('TakeexamattendanceComponent', () => {
  let component: TakeexamattendanceComponent;
  let fixture: ComponentFixture<TakeexamattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeexamattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeexamattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
