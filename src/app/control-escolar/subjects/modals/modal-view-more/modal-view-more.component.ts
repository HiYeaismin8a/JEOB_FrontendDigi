import { Component } from '@angular/core';
import { StudentViewModel } from 'src/app/interfaces/StudentViewModel';

@Component({
  selector: 'app-modal-view-more',
  templateUrl: './modal-view-more.component.html',
  styleUrls: ['./modal-view-more.component.css']
})
export class ModalViewMoreComponent {

  students: StudentViewModel[] = [];

  constructor(){
    
  }
}
