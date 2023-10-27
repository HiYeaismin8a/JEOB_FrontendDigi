import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectViewModel, SubjecttViewModelForm } from 'src/app/interfaces/SubjectViewModel';

import { Component } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-modal-subject',
  templateUrl: './modal-subject.component.html',
  styleUrls: ['./modal-subject.component.css']
})
export class ModalSubjectComponent {

  public addSubjectForm!: FormGroup<SubjecttViewModelForm>;

  subjects: SubjectViewModel[]= [];

  constructor(
    private subjectService: SubjectsService,
  ){
    this.addSubjectForm = new FormGroup(
      {
        name: new FormControl("",{nonNullable: true, validators: [Validators.required]}),
        cost: new FormControl(0,{nonNullable: true, validators: [Validators.required]}),
      }
    );
  }

  ngOnInit() {
    this.subjectService.getAllStudents().subscribe(data => this.subjects = data);
  }

  addSubject(){
    
  }
}
