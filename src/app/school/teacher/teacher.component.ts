import { Component, Input } from '@angular/core';
import { JavascriptStudent } from 'src/app/interfaces/javascript-student';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  //Violating principle, teacher component is highly coupled to a certain student

  @Input()
  student?: JavascriptStudent

  teach() {
    console.log("Teaching...")
  }
}
