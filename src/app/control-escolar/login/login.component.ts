import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DialogService } from 'primeng/dynamicdialog';
import { LoginService } from './../../services/login.service';
import { LoginViewModelForm } from 'src/app/interfaces/LoginViewModel';
import { MessageService } from 'primeng/api';
import { ModalStudentComponent } from '../students/modals/modal-student/modal-student.component';
import { Router } from '@angular/router';
import { StudentViewModel } from 'src/app/interfaces/StudentViewModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DialogService, MessageService],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup<LoginViewModelForm>;
  students: StudentViewModel[] = [];

  constructor(
    private loginService: LoginService,
    public router: Router,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {
    this.loginForm = new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/[a-zA-Z]+/)],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.pattern(/[a-zA-Z]+/)],
      }),
    });
  }

  ngOnInit(): void {
    this.verifyLogin();
  }

  verifyLogin() {
    if (this.loginForm.valid) {
      this.loginService
        .login(this.loginForm.getRawValue())
        .subscribe((student) => {
          if (student != null) {
            // Trae un estudiante
            this.router.navigate(['student']);
          }
          this.messageService.add({
            severity: 'error',
            summary: 'ERROR',
            detail: 'No está registrado en la Base da Datos',
          });
          return;
        });
    }
  }

  showCreateStudent() {
    const ref = this.dialogService.open(ModalStudentComponent, {
      header: 'Agregar un estudiante',
      width: '35%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });

    ref.onClose.subscribe((student: StudentViewModel) => {
      if (student) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: student.nombre,
        });
        this.students.push(student);
      }
    });

    ref.onMaximize.subscribe((value) => {
      this.messageService.add({
        severity: 'info',
        summary: 'Maximized',
        detail: `maximized: ${value.maximized}`,
      });
    });
  }
}
