import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureTeacherComponent } from './configure-teacher.component';

describe('ConfigureTeacherComponent', () => {
  let component: ConfigureTeacherComponent;
  let fixture: ComponentFixture<ConfigureTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
