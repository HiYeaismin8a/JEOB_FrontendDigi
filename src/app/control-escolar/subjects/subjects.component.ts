import { Component } from '@angular/core';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  subjects: SubjectViewModel[] = [];

  
}
