import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { MessageService } from 'primeng/api';
import { ModalSubjectComponent } from './modals/modal-subject/modal-subject.component';
import { ModalUpdateSubjectComponent } from './modals/modal-update-subject/modal-update-subject.component';
import { ModalViewMoreComponent } from './modals/modal-view-more/modal-view-more.component';
import { StudentViewModel } from 'src/app/interfaces/StudentViewModel';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [DialogService, MessageService],
})
export class SubjectsComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  student: StudentViewModel[] = [];
  subjects: SubjectViewModel[] = [];
  selectedStudent: StudentViewModel | undefined;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private subjectService: SubjectsService
  ) {}

  ngOnInit() {
    this.readAllSubjects();
  }

  ngOnDestroy() {
    this.closeModals();
  }

  closeModals() {
    if (this.ref) {
      this.ref.close();
    }
  }

  readAllSubjects() {
    this.subjectService.getAllSubjects().subscribe((response) => {
      this.subjects = [];
      this.subjects = response;
    });
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
        this.subjects.push(subject);
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

  showModalUpdateSubject(subject: SubjectViewModel) {
    this.ref = this.dialogService.open(ModalUpdateSubjectComponent, {
      header: 'Actualizar la siguiente materia',
      width: '35%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: { subject },
    });

    this.ref.onClose.subscribe((subject: SubjectViewModel) => {
      if (subject) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: subject.nombre,
        });
        this.readAllSubjects();
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

  showModalViewMoreInformation(subject: SubjectViewModel) {
    this.ref = this.dialogService.open(ModalViewMoreComponent, {
      header: '',
      width: '85%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: { subject },
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

  deleteSubject(subject: SubjectViewModel) {
    this.subjectService
      .deleteSubject(subject.idMateria!)
      .subscribe((response) => {
        if (response) {
          this.readAllSubjects();
        }
      });
  }
}
