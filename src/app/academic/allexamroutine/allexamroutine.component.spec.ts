import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllexamroutineComponent } from './allexamroutine.component';

describe('AllexamroutineComponent', () => {
  let component: AllexamroutineComponent;
  let fixture: ComponentFixture<AllexamroutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllexamroutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllexamroutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
