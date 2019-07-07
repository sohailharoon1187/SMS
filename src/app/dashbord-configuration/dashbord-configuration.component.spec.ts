import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordConfigurationComponent } from './dashbord-configuration.component';

describe('DashbordConfigurationComponent', () => {
  let component: DashbordConfigurationComponent;
  let fixture: ComponentFixture<DashbordConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
