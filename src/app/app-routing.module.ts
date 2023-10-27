import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './control-escolar/login/login.component';
import { NgModule } from '@angular/core';
import { StudentsComponent } from './control-escolar/students/students.component';
import { SubjectsComponent } from './control-escolar/subjects/subjects.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "login"},
  { path: 'login', component: LoginComponent},
  { path: 'student', component: StudentsComponent},
  { path: 'subject', component: SubjectsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    
  ]
})
export class AppRoutingModule {
  
 }
