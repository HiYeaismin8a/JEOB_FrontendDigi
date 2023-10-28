import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { MessageService } from 'primeng/api';
import { ModalSubjectComponent } from './modals/modal-subject/modal-subject.component';
import { ModalUpdateSubjectComponent } from './modals/modal-update-subject/modal-update-subject.component';
import { ModalViewMoreComponent } from './modals/modal-view-more/modal-view-more.component';
import { StudentViewModel } from 'src/app/interfaces/StudentViewModel';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [DialogService, MessageService]
})
export class SubjectsComponent implements OnInit {

  ref: DynamicDialogRef | undefined;
  student: StudentViewModel[]=[];
  subjects: SubjectViewModel[] = [];
  selectedStudent: StudentViewModel | undefined;


  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
  ) {}

  ngOnInit() {
    this.student = [
        { idAlumno: 1, nombre: 'New York', apellidoPaterno: 'Ochoa',apellidoMaterno:'Benitez' },
        { idAlumno:2, nombre: 'Rome', apellidoPaterno:'Jazmin',apellidoMaterno:'Benitez'},
        { idAlumno:3, nombre: 'London', apellidoPaterno:'Kaze',apellidoMaterno:'Benitez'},
    ];
}

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  showModalSubject() {
    this.ref = this.dialogService.open(ModalSubjectComponent, {
      header: 'Agregar una materia',
      width: '35%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe((subject: SubjectViewModel) => {
      if (subject) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: subject.nombre,
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

  showModalUpdateSubject() {
    this.ref = this.dialogService.open(ModalUpdateSubjectComponent, {
      header: 'Actualizar la siguiente materia',
      width: '35%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe((subject: SubjectViewModel) => {
      if (subject) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: subject.nombre,
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

  showModalViewMoreInformation(){
    this.ref = this.dialogService.open(ModalViewMoreComponent, {
      header: 'La materia de -- tiene los siguientes alumnos inscritos:',
      width: '85%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    this.ref.onClose.subscribe((subject: SubjectViewModel) => {
      if (subject) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: subject.nombre,
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
