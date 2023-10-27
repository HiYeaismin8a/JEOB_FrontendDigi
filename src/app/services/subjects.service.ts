import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectViewModel } from '../interfaces/SubjectViewModel';
import { constants } from 'constant';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllStudents(): Observable<SubjectViewModel[]> {
    return this.http.get<SubjectViewModel[]>(constants.urlApi + '/student/GetAllStudents');
  }
}
