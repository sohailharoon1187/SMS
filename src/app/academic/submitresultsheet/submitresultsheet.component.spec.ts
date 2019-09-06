import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitresultsheetComponent } from './submitresultsheet.component';

describe('SubmitresultsheetComponent', () => {
  let component: SubmitresultsheetComponent;
  let fixture: ComponentFixture<SubmitresultsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitresultsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitresultsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
