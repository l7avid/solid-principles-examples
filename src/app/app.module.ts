import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherComponent } from './school/teacher/teacher.component';
import { JavascriptStudentComponent } from './school/javascript-student/javascript-student.component';
import { ReactStudentComponent } from './school/react-student/react-student.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    JavascriptStudentComponent,
    ReactStudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
