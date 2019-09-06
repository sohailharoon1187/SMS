import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettimetableComponent } from './settimetable.component';

describe('SettimetableComponent', () => {
  let component: SettimetableComponent;
  let fixture: ComponentFixture<SettimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
