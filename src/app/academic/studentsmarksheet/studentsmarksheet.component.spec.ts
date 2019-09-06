import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsmarksheetComponent } from './studentsmarksheet.component';

describe('StudentsmarksheetComponent', () => {
  let component: StudentsmarksheetComponent;
  let fixture: ComponentFixture<StudentsmarksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsmarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
