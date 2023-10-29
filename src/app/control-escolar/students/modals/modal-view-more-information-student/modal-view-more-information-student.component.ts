import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  StudentViewModel,
  StudentViewModelForm,
} from 'src/app/interfaces/StudentViewModel';
import {
  SubjectViewModel,
  SubjectViewModelForm,
} from 'src/app/interfaces/SubjectViewModel';

import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { StudentsService } from 'src/app/services/students.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-modal-view-more-information-student',
  templateUrl: './modal-view-more-information-student.component.html',
  styleUrls: ['./modal-view-more-information-student.component.css'],
})
export class ModalViewMoreInformationStudentComponent {
  subjects: SubjectViewModel[] = [];
  student!: StudentViewModel;
  cost: number = 0;

  constructor(
    private config: DynamicDialogConfig,
    private studentsService: StudentsService
  ) {
    this.student = config.data.student;

    this.readSubjectByStudent();
  }

  readSubjectByStudent() {
    this.studentsService
      .getSubjectByIdStudent(this.student.idAlumno)
      .subscribe((response) => {
        this.subjects = response;
        this.cost = response.reduce((v, x) => v + x.costo, 0);
        console.log(
          response.reduce((v, x) => v + x.costo, 0),
          response[0].costo
        );
      });
  }
}
