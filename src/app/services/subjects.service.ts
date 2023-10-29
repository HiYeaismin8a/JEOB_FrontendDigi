import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentViewModel } from '../interfaces/StudentViewModel';
import { SubjectViewModel } from '../interfaces/SubjectViewModel';
import { constants } from 'constant';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllSubjects(): Observable<SubjectViewModel[]> {

    return this.http.get<SubjectViewModel[]>(`${constants.urlApi}/subject/GetAllMateria`);
  }

  getStudentByIdSubject(idSubject: number){

    return this.http.get<StudentViewModel[]>(`${constants.urlApi}/subject/GetStudentByIdSubject/${idSubject}`);
  }

  addSubject(subject:SubjectViewModel): Observable<SubjectViewModel>{

    return this.http.post<SubjectViewModel>(`${constants.urlApi}/subject/PostMateria/`,subject);
  }

  updateSubject(subject: SubjectViewModel): Observable<SubjectViewModel>{

    return this.http.put<SubjectViewModel>(`${constants.urlApi}/subject/UpdateMateria/`,subject);
  }

  deleteSubject(id: number): Observable<Boolean>{

      return this.http.delete<boolean>(`${constants.urlApi}/subject/DeleteSubject/${id}`);
  }
  
}
