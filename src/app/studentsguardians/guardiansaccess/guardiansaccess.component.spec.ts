import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansaccessComponent } from './guardiansaccess.component';

describe('GuardiansaccessComponent', () => {
  let component: GuardiansaccessComponent;
  let fixture: ComponentFixture<GuardiansaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiansaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiansaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
