import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-student',
  templateUrl: './react-student.component.html',
  styleUrls: ['./react-student.component.css']
})
export class ReactStudentComponent {

  learnReact() {
    console.log("Learning React")
  }
}
