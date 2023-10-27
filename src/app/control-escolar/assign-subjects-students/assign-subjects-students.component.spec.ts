import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubjectsStudentsComponent } from './assign-subjects-students.component';

describe('AssignSubjectsStudentsComponent', () => {
  let component: AssignSubjectsStudentsComponent;
  let fixture: ComponentFixture<AssignSubjectsStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignSubjectsStudentsComponent]
    });
    fixture = TestBed.createComponent(AssignSubjectsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
