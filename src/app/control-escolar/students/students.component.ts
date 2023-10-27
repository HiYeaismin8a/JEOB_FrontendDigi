import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ModalStudentComponent } from './modals/modal-student/modal-student.component';
import { ModalUpdateStudentComponent } from './modals/modal-update-student/modal-update-student.component';
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

}
