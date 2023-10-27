import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { StudentViewModelForm } from 'src/app/interfaces/StudentViewModel';
import { StudentsService } from 'src/app/services/students.service';
import { SubjectViewModel } from './../../../../interfaces/SubjectViewModel';

@Component({
  selector: 'app-modal-update-student',
  templateUrl: './modal-update-student.component.html',
  styleUrls: ['./modal-update-student.component.css']
})
export class ModalUpdateStudentComponent {

  public addStudentForm!: FormGroup<StudentViewModelForm>;
  subjects: SubjectViewModel[] =[];

  constructor(
    private studentService: StudentsService,
  ){
    this.addStudentForm = new FormGroup(
      {
        nombre: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
        apellidoPaterno: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
        apellidoMaterno: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
        materias: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
      }
    );
  }

  addStudent(  ){}

}
