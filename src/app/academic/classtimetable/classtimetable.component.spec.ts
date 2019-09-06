import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasstimetableComponent } from './classtimetable.component';

describe('ClasstimetableComponent', () => {
  let component: ClasstimetableComponent;
  let fixture: ComponentFixture<ClasstimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasstimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasstimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
