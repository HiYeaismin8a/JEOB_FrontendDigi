import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentViewModel, StudentViewModelForm } from 'src/app/interfaces/StudentViewModel';
import { SubjectViewModel, SubjecttViewModelForm } from 'src/app/interfaces/SubjectViewModel';

import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { StudentsService } from 'src/app/services/students.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-modal-view-more-information-student',
  templateUrl: './modal-view-more-information-student.component.html',
  styleUrls: ['./modal-view-more-information-student.component.css']
})
export class ModalViewMoreInformationStudentComponent {

  public addStudentForm!: FormGroup<StudentViewModelForm>;
  public addSubjectForm!: FormGroup<SubjecttViewModelForm>;
  subjects: SubjectViewModel[]=[];
  student!: StudentViewModel;
  cost: number = 0;

  constructor(
    private config: DynamicDialogConfig,
    private studentsService: StudentsService,
  ){

    this.student = config.data.student;
    this.addStudentForm = new FormGroup({
      nombre: new FormControl(this.student.nombre,{nonNullable: true, validators: [Validators.required]}),
      apellidoPaterno: new FormControl(this.student.apellidoPaterno,{nonNullable: true, validators: [Validators.required]}),
      apellidoMaterno: new FormControl(this.student.apellidoMaterno,{nonNullable: true, validators: [Validators.required]})
    });

    this.readSubjectByStudent();
  }

  readSubjectByStudent(){
    this.studentsService.getSubjectByIdStudent(this.student.idAlumno).subscribe(response => {
      this.subjects = response;
      this.cost = response.reduce((v,x)=> v + x.costo, 0);
      console.log(response.reduce((v,x)=> v + x.costo, 0), response[0].costo) ;
    });
  }

}
