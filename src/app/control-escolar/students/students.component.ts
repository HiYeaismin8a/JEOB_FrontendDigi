import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentViewModel } from './../../interfaces/StudentViewModel';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [DialogService, MessageService]
})
export class StudentsComponent {

  constructor(
    public dialogService: DialogService, 
    public messageService: MessageService,
  ) {}
  
  ref: DynamicDialogRef | undefined;


  show() {
    this.ref = this.dialogService.open(StudentsComponent, {
        header: 'Select a Product',
        width: '70%',
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

ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}
}
