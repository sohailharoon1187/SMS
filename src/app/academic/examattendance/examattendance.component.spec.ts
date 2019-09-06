import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamattendanceComponent } from './examattendance.component';

describe('ExamattendanceComponent', () => {
  let component: ExamattendanceComponent;
  let fixture: ComponentFixture<ExamattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
