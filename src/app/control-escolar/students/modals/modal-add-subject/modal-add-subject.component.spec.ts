import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddSubjectComponent } from './modal-add-subject.component';

describe('ModalAddSubjectComponent', () => {
  let component: ModalAddSubjectComponent;
  let fixture: ComponentFixture<ModalAddSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddSubjectComponent]
    });
    fixture = TestBed.createComponent(ModalAddSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
