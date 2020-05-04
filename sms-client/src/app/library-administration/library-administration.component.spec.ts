import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdministrationComponent } from './library-administration.component';

describe('LibraryAdministrationComponent', () => {
  let component: LibraryAdministrationComponent;
  let fixture: ComponentFixture<LibraryAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
