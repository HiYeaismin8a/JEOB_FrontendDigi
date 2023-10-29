import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';

import { MessageService } from 'primeng/api';
import { NonNullableFormBuilder } from '@angular/forms';
import { StudentViewModel } from 'src/app/interfaces/StudentViewModel';
import { StudentsService } from './../../services/students.service';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-assign-subjects-students',
  templateUrl: './assign-subjects-students.component.html',
  styleUrls: ['./assign-subjects-students.component.css'],
})
export class AssignSubjectsStudentsComponent implements OnInit {
  students!: StudentViewModel[];
  subjects: Subject[] = [];
  selectedStudent?: StudentViewModel;
  subjectsSelected: Subject[] = [];

  constructor(
    private studentService: StudentsService,
    private subjectService: SubjectsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((response) => {
      this.students = response;
      this.selectedStudent = this.students[0];
      if (!this.selectedStudent) {
        return;
      }
      this.subjectService.getAllSubjects().subscribe((response) => {
        response.forEach((subject) =>
          this.subjects.push({ id: subject.idMateria!, nombre: subject.nombre })
        );
        this.loadSubjects();
      });
    });
  }

  readAllStudent() {
    this.studentService.getAllStudents().subscribe((response) => {
      this.students = response;
      this.selectedStudent = this.students[0];
    });
  }

  loadSubjects() {
    this.studentService
      .getSubjectByIdStudent(this.selectedStudent!.idAlumno)
      .subscribe((result) => {
        this.subjectsSelected = result.map((x) => {
          return { id: x.idMateria!, nombre: x.nombre };
        });
      });
  }

  getSubjects() {
    this.subjectService.getAllSubjects().subscribe((response) => {
      response.forEach((subject) =>
        this.subjects.push({ id: subject.idMateria!, nombre: subject.nombre })
      );
    });
  }

  seeChanges() {}

  assign() {
    this.studentService
      .postSubject(
        this.selectedStudent!.idAlumno,
        this.subjectsSelected.map((x) => x.id)
      )
      .subscribe((response) => {
        if (!response) {
          this.getSubjects();
        }

        //Ya están marcadas.
        this.show();
      });
    console.log(this.subjectsSelected.map((x) => x.id));
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Materias Agregadas',
      detail: 'Las materias fueron agregas exitosamente',
    });
  }
}

interface Subject {
  id: number;
  nombre: string;
}
