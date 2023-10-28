import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { StudentViewModelForm } from 'src/app/interfaces/StudentViewModel';
import { StudentsService } from 'src/app/services/students.service';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.css']
})
export class ModalStudentComponent {

  public addStudentForm!: FormGroup<StudentViewModelForm>;

  constructor(
    private studentService: StudentsService,
  ){
    this.addStudentForm = new FormGroup(
      {
        nombre: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
        apellidoPaterno: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
        apellidoMaterno: new FormControl('',{nonNullable: true, validators: [Validators.required]})
      }
    );
  }

  addStudent(  ){}

}
