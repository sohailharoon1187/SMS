import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasspromotionComponent } from './classpromotion.component';

describe('ClasspromotionComponent', () => {
  let component: ClasspromotionComponent;
  let fixture: ComponentFixture<ClasspromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasspromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasspromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
