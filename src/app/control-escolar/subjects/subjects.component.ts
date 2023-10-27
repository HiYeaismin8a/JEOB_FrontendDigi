import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ModalSubjectComponent } from './modals/modal-subject/modal-subject.component';
import { ModalUpdateSubjectComponent } from './modals/modal-update-subject/modal-update-subject.component';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [DialogService, MessageService]
})
export class SubjectsComponent {

  ref: DynamicDialogRef | undefined;
  subjects: SubjectViewModel[] = [];

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
  ) {}

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
