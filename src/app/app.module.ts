import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './control-escolar/login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './control-escolar/students/students.component';
import { SubjectsComponent } from './control-escolar/subjects/subjects.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SubjectsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
