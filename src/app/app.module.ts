import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssignSubjectsStudentsComponent } from './control-escolar/assign-subjects-students/assign-subjects-students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { HttpClientModule } from  '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './control-escolar/login/login.component';
import { MessageService } from 'primeng/api';
import { ModalStudentComponent } from './control-escolar/students/modals/modal-student/modal-student.component';
import { ModalSubjectComponent } from './control-escolar/subjects/modals/modal-subject/modal-subject.component';
import { ModalUpdateStudentComponent } from './control-escolar/students/modals/modal-update-student/modal-update-student.component';
import { ModalUpdateSubjectComponent } from './control-escolar/subjects/modals/modal-update-subject/modal-update-subject.component';
import { ModalViewMoreComponent } from './control-escolar/subjects/modals/modal-view-more/modal-view-more.component';
import { ModalViewMoreInformationStudentComponent } from './control-escolar/students/modals/modal-view-more-information-student/modal-view-more-information-student.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StudentsComponent } from './control-escolar/students/students.component';
import { SubjectsComponent } from './control-escolar/subjects/subjects.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    SubjectsComponent,
    ModalSubjectComponent,
    ModalStudentComponent,
    ModalUpdateStudentComponent,
    AssignSubjectsStudentsComponent,
    ModalUpdateSubjectComponent,
    ModalViewMoreComponent,
    ModalViewMoreInformationStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    CommonModule,
    SplitButtonModule,
    SidebarModule,
    MultiSelectModule
  ],
  exports:[FormsModule, ReactiveFormsModule],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
