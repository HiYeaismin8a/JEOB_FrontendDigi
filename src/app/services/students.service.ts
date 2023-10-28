import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentViewModel } from './../interfaces/StudentViewModel';
import { SubjectViewModel } from '../interfaces/SubjectViewModel';
import { constants } from 'constant';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllStudents(): Observable<StudentViewModel[]> {

    return this.http.get<StudentViewModel[]>(`${constants.urlApi}/student/GetAllStudents`);
  }

  getSubjectByIdStudent(idStudent: number){

    return this.http.get<SubjectViewModel[]>(`${constants.urlApi}/student/GetSubjectByIdStudent/${idStudent}`);
  }

  addStudent(student: StudentViewModel): Observable<StudentViewModel>{

    return this.http.post<StudentViewModel>(`${constants.urlApi}/student/PostStudent/`, student);
  }

  updateStudent(student: StudentViewModel): Observable<StudentViewModel>{

    return this.http.put<StudentViewModel>(`${constants.urlApi}/student/UpdateStudent/`,student);
  }

  deleteStudent(id: number): Observable<Boolean>{

    return this.http.delete<boolean>(`${constants.urlApi}/student/DeleteStudent/${id}`);
  }

}
