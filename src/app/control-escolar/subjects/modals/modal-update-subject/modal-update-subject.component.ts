import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectViewModel, SubjectViewModelForm } from 'src/app/interfaces/SubjectViewModel';

import { Component } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-modal-update-subject',
  templateUrl: './modal-update-subject.component.html',
  styleUrls: ['./modal-update-subject.component.css']
})
export class ModalUpdateSubjectComponent {

  public updateSubjectForm!: FormGroup<SubjectViewModelForm>;
  subject!: SubjectViewModel;

  constructor(
    private subjectService: SubjectsService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ){
    this.subject = config.data.student;
    this.updateSubjectForm = new FormGroup(
      {
        nombre: new FormControl(this.subject.nombre,{nonNullable: true, validators: [Validators.required]}),
        costo: new FormControl(this.subject.costo,{nonNullable: true, validators: [Validators.required]}),
      });
  }

  updateStudent(){
    if(this.updateSubjectForm.valid){
      this.subjectService.updateSubject({idMateria:this.subject.idMateria, ...this.updateSubjectForm.getRawValue()}).subscribe(response =>{
        this.ref.close(response);
      });
    }
  }

}
