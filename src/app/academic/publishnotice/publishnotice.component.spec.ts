import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishnoticeComponent } from './publishnotice.component';

describe('PublishnoticeComponent', () => {
  let component: PublishnoticeComponent;
  let fixture: ComponentFixture<PublishnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
