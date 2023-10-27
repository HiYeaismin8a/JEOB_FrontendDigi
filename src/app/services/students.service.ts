import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentViewModel } from './../interfaces/StudentViewModel';
import { constants } from 'constant';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllStudents(): Observable<StudentViewModel[]> {
    return this.http.get<StudentViewModel[]>(constants.urlApi + '/student/GetAllStudents');
  }
}
