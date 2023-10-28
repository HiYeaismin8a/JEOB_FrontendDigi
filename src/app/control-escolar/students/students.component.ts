import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { MessageService } from 'primeng/api';
import { ModalStudentComponent } from './modals/modal-student/modal-student.component';
import { ModalUpdateStudentComponent } from './modals/modal-update-student/modal-update-student.component';
import { ModalViewMoreInformationStudentComponent } from './modals/modal-view-more-information-student/modal-view-more-information-student.component';
import { StudentViewModel } from './../../interfaces/StudentViewModel';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [DialogService, MessageService]
})
export class StudentsComponent implements OnInit {

  ref: DynamicDialogRef | undefined;
  students: StudentViewModel[] = [];
  subjects: SubjectViewModel[]=[];
  selectedSubject: SubjectViewModel | undefined;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
  ) {}

  ngOnInit() {
    this.subjects = [
        { name: 'New York', cost: 20 },
        { name: 'Rome', cost:50},
        { name: 'London', cost:100 },
        { name: 'Istanbul', cost:30},
        { name: 'Paris', cost: 40.5 }
    ];
}

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  showModalStudent() {
    this.ref = this.dialogService.open(ModalStudentComponent, {
        header: 'Agregar un estudiante',
        width: '35%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true
    });

    this.ref.onClose.subscribe((student: StudentViewModel) => {
        if (student) {
            this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: student.nombre });
        }
    });

    this.ref.onMaximize.subscribe((value) => {
        this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }


  showModalUpdateStudent(){
    this.ref = this.dialogService.open(ModalUpdateStudentComponent, {
      header: 'Actualizar el siguiente estudiante',
      width: '40%',
      height: '40rem',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
  });

  this.ref.onClose.subscribe((student: StudentViewModel) => {
      if (student) {
          this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: student.nombre });
      }
  });

  this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });
  }

  showModalViewMoreInformation(){
    this.ref = this.dialogService.open(ModalViewMoreInformationStudentComponent, {
      header: 'El alumno -- tiene las siguientes materias:',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe((subject: SubjectViewModel) => {
      if (subject) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: subject.name,
        });
      }
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }

}
