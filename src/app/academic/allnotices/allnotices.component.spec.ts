import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnoticesComponent } from './allnotices.component';

describe('AllnoticesComponent', () => {
  let component: AllnoticesComponent;
  let fixture: ComponentFixture<AllnoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllnoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllnoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
