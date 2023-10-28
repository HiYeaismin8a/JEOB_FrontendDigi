import { RouterModule, Routes } from '@angular/router';

import { AssignSubjectsStudentsComponent } from './control-escolar/assign-subjects-students/assign-subjects-students.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './control-escolar/login/login.component';
import { NgModule } from '@angular/core';
import { StudentsComponent } from './control-escolar/students/students.component';
import { SubjectsComponent } from './control-escolar/subjects/subjects.component';
import { TableModule } from 'primeng/table';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "login"},
  { path: 'login', component: LoginComponent},
  { path: 'student', component: StudentsComponent},
  { path: 'subject', component: SubjectsComponent},
  { path: 'subject-student', component: AssignSubjectsStudentsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    TableModule,
    FormsModule

  ]
})
export class AppRoutingModule {

 }
