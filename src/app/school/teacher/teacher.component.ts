import { Component, Input } from '@angular/core';
import { JavascriptStudent } from 'src/app/interfaces/javascript-student';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  //We create a Student interface that holds both students and then, teacher is not coupled to a certain student

  @Input()
  students?: Student[]

  teach() {
    console.log("Teaching...")
  }
}
