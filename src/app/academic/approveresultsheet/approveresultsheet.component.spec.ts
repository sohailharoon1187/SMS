import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveresultsheetComponent } from './approveresultsheet.component';

describe('ApproveresultsheetComponent', () => {
  let component: ApproveresultsheetComponent;
  let fixture: ComponentFixture<ApproveresultsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveresultsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveresultsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
