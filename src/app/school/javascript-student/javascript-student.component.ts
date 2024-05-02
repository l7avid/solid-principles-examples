import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-student',
  templateUrl: './javascript-student.component.html',
  styleUrls: ['./javascript-student.component.css']
})
export class JavascriptStudentComponent {

  learnJavascript() {
    console.log("Learning Javascript")
  }
}
