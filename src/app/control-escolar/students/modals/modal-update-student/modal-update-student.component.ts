import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentViewModel, StudentViewModelForm } from 'src/app/interfaces/StudentViewModel';

import { StudentsService } from 'src/app/services/students.service';
import { SubjectViewModel } from 'src/app/interfaces/SubjectViewModel';

@Component({
  selector: 'app-modal-update-student',
  templateUrl: './modal-update-student.component.html',
  styleUrls: ['./modal-update-student.component.css']
})
export class ModalUpdateStudentComponent{

  public updateStudentForm!: FormGroup<StudentViewModelForm>;
  student!: StudentViewModel;

  constructor(
    private studentService: StudentsService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ){

    this.student = config.data.student;
    this.updateStudentForm = new FormGroup(
      {
        nombre: new FormControl(this.student.nombre,{nonNullable: true, validators: [Validators.required]}),
        apellidoPaterno: new FormControl(this.student.apellidoPaterno,{nonNullable: true, validators: [Validators.required]}),
        apellidoMaterno: new FormControl(this.student.apellidoMaterno,{nonNullable: true, validators: [Validators.required]})
      });

  }


  updateStudent( ){
   if(this.updateStudentForm.valid){
    this.studentService.updateStudent({idAlumno:this.student.idAlumno, ...this.updateStudentForm.getRawValue()}).subscribe(response =>{
      this.ref.close(response);
    });
   }
  }

}
