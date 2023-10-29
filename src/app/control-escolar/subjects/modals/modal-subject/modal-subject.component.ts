import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SubjectViewModel,
  SubjectViewModelForm,
} from 'src/app/interfaces/SubjectViewModel';

import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-modal-subject',
  templateUrl: './modal-subject.component.html',
  styleUrls: ['./modal-subject.component.css'],
})
export class ModalSubjectComponent {
  public addSubjectForm!: FormGroup<SubjectViewModelForm>;

  constructor(
    private subjectService: SubjectsService,
    private ref: DynamicDialogRef
  ) {
    this.addSubjectForm = new FormGroup({
      nombre: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/[a-zA-Z]+/)],
      }),
      costo: new FormControl(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/[0-9]+/)],
      }),
    });
  }

  addSubject() {
    this.subjectService
      .addSubject(this.addSubjectForm.getRawValue())
      .subscribe((response) => {
        this.ref.close(response);
      });
  }

  closeModals() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
