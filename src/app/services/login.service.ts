import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from '../interfaces/LoginViewModel';
import { Observable } from 'rxjs';
import { StudentViewModel } from '../interfaces/StudentViewModel';
import { constants } from 'constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  login(loginViewModel: LoginViewModel): Observable<StudentViewModel>{

    return this.http.post<StudentViewModel>( constants.urlApi + '/Login/Login', loginViewModel );
  }

}
