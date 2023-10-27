import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ModalStudentComponent } from './modals/modal-student/modal-student.component';
import { ModalSubjectComponent } from '../subjects/modal-subject/modal-subject.component';
import { StudentViewModel } from './../../interfaces/StudentViewModel';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [DialogService, MessageService]
})
export class StudentsComponent {

  ref: DynamicDialogRef | undefined;
  students: StudentViewModel[] = [];

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
  ) {}

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  showModalStudent() {
    this.ref = this.dialogService.open(ModalStudentComponent, {
        header: 'Agrega un estudiante',
        width: '50%',
        height: '65rem',
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



  showModalSubject(){
    this.ref = this.dialogService.open(ModalSubjectComponent, {
      header: 'Agrega una materia',
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
}
