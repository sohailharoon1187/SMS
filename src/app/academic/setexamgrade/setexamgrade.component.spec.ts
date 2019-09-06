import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetexamgradeComponent } from './setexamgrade.component';

describe('SetexamgradeComponent', () => {
  let component: SetexamgradeComponent;
  let fixture: ComponentFixture<SetexamgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetexamgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetexamgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
