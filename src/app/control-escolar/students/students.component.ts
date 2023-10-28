import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ModalStudentComponent } from './modals/modal-student/modal-student.component';
import { ModalUpdateStudentComponent } from './modals/modal-update-student/modal-update-student.component';
import { ModalViewMoreInformationStudentComponent } from './modals/modal-view-more-information-student/modal-view-more-information-student.component';
import { StudentViewModel } from './../../interfaces/StudentViewModel';
import { StudentsService } from 'src/app/services/students.service';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [DialogService, MessageService],
})
export class StudentsComponent implements OnInit {
  students: StudentViewModel[] = [];
  subjects: SubjectViewModel[] = [];
  selectedSubject: SubjectViewModel | undefined;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private studentService: StudentsService
  ) {}

  ngOnInit() {
    this.readAllStudent();
    this.subjects = [];
  }

  readAllStudent() {
    this.studentService.getAllStudents().subscribe((response) => {
      this.students = [];
      this.students = response;
    });
  }

  showModalStudent() {
    
    const ref = this.dialogService.open(ModalStudentComponent, {
      header: 'Agregar un estudiante',
      width: '35%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    ref.onClose.subscribe((student: StudentViewModel) => {
      if (student) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: student.nombre,
        });
      }
    });

    ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }

  showModalUpdateStudent(student: StudentViewModel) {
    const ref = this.dialogService.open(ModalUpdateStudentComponent, {
      header: 'Actualizar el siguiente estudiante',
      width: '40%',
      height: '40rem',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: { student: { ...student } },
    });

    ref.onClose.subscribe((student: StudentViewModel) => {
      if (student) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: student.nombre,
        });
      }
    });

    ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }

  showModalViewMoreInformation(student: StudentViewModel) {
    const ref = this.dialogService.open(
      ModalViewMoreInformationStudentComponent,
      {
        header: '',
        width: '70%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: { student: { ...student } },
      }
    );

    ref.onClose.subscribe((subject: SubjectViewModel) => {
      if (subject) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: subject.nombre,
        });
      }
    });

    ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }
}
