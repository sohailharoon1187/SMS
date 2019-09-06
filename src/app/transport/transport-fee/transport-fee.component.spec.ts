import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportFeeComponent } from './transport-fee.component';

describe('TransportFeeComponent', () => {
  let component: TransportFeeComponent;
  let fixture: ComponentFixture<TransportFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
