import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherConfigurationComponent } from './teacher-configuration.component';

describe('TeacherConfigurationComponent', () => {
  let component: TeacherConfigurationComponent;
  let fixture: ComponentFixture<TeacherConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
