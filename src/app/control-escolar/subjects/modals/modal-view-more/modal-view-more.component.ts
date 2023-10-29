import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { StudentViewModel } from 'src/app/interfaces/StudentViewModel';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-modal-view-more',
  templateUrl: './modal-view-more.component.html',
  styleUrls: ['./modal-view-more.component.css'],
})
export class ModalViewMoreComponent {
  students: StudentViewModel[] = [];
  subject!: SubjectViewModel;

  constructor(
    private subjectService: SubjectsService,
    private config: DynamicDialogConfig
  ) {
    this.subject = config.data.subject;

    this.readStudentBySubject();
  }

  readStudentBySubject() {
    this.subjectService
      .getStudentByIdSubject(this.subject.idMateria!)
      .subscribe((response) => {
        this.students = response;
      });
  }
}
