import { Component } from '@angular/core';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-modal-view-more-information-student',
  templateUrl: './modal-view-more-information-student.component.html',
  styleUrls: ['./modal-view-more-information-student.component.css']
})
export class ModalViewMoreInformationStudentComponent {

  subjects: SubjectViewModel[]=[];

  constructor(){

  }
  
}
