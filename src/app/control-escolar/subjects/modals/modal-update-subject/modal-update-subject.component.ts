import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SubjectViewModel,
  SubjectViewModelForm,
} from 'src/app/interfaces/SubjectViewModel';

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-modal-update-subject',
  templateUrl: './modal-update-subject.component.html',
  styleUrls: ['./modal-update-subject.component.css'],
  providers: [MessageService],
})
export class ModalUpdateSubjectComponent {
  public updateSubjectForm!: FormGroup<SubjectViewModelForm>;
  subject!: SubjectViewModel;

  constructor(
    private subjectService: SubjectsService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private messageService: MessageService,
  ) {
    this.subject = config.data.subject;
    this.updateSubjectForm = new FormGroup({
      nombre: new FormControl(this.subject.nombre, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/[a-zA-Z]+/)],
      }),
      costo: new FormControl(this.subject.costo, {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/[0-9]+/)],
      }),
    });
  }

  updateStudent() {
    if (this.updateSubjectForm.valid) {
      this.subjectService
        .updateSubject({
          idMateria: this.subject.idMateria,
          ...this.updateSubjectForm.getRawValue(),
        })
        .subscribe((response) => {
          console.log("cfaneovjalne", response);
          this.ref.close(response);
        });
    }
  }

  closeModals() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
