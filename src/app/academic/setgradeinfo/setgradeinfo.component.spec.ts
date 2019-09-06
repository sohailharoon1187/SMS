import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetgradeinfoComponent } from './setgradeinfo.component';

describe('SetgradeinfoComponent', () => {
  let component: SetgradeinfoComponent;
  let fixture: ComponentFixture<SetgradeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetgradeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetgradeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
