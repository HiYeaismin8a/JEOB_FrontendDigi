import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  StudentViewModel,
  StudentViewModelForm,
} from 'src/app/interfaces/StudentViewModel';

import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.css'],
})
export class ModalStudentComponent {
  public addStudentForm!: FormGroup<StudentViewModelForm>;

  constructor(
    private studentService: StudentsService,
    private ref: DynamicDialogRef
  ) {
    this.addStudentForm = new FormGroup({
      nombre: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      apellidoPaterno: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      apellidoMaterno: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  addStudent() {
    if (this.addStudentForm.valid) {
      this.studentService
        .addStudent({ idAlumno: 0, ...this.addStudentForm.getRawValue() })
        .subscribe((response) => {
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
