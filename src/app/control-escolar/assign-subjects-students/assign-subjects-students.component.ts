import { Component } from '@angular/core';
import { StudentViewModel } from 'src/app/interfaces/StudentViewModel';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-assign-subjects-students',
  templateUrl: './assign-subjects-students.component.html',
  styleUrls: ['./assign-subjects-students.component.css']
})
export class AssignSubjectsStudentsComponent {

  students: StudentViewModel[]=[];
  subjects: SubjectViewModel[] = [];
  selectedStudent: StudentViewModel | undefined;

  constructor(){}

}
