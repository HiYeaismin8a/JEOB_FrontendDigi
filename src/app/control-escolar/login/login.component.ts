import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginViewModel, LoginViewModelForm } from 'src/app/interfaces/LoginViewModel';

import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginViewModelForm>;

  constructor(
    private loginService: LoginService,
    public router: Router,
  ) {
    this.loginForm = new FormGroup(
      {
        name: new FormControl("",{nonNullable: true, validators: [Validators.required]}),
        lastName: new FormControl("",{nonNullable: true, validators: [Validators.required]}),
      }
    );
  }

  ngOnInit(): void {
    this.verifyLogin();
  }

  verifyLogin() {
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.getRawValue()).subscribe(student =>{
        this.router.navigate(['student']);
      })
      
    };
  }
}
