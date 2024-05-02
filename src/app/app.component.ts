import { Component } from '@angular/core';
import { JavascriptStudent } from './interfaces/javascript-student';
import { Student } from './interfaces/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solid-principles-examples';

  students: Student[] = [{
    id: "1",
    firstName: "David",
    lastName: "Reina",
    age: 26
  },
  {
    id: "2",
    firstName: "Juan",
    lastName: "Gómez",
    age: 24
  },
  {
    id: "3",
    firstName: "Ana",
    lastName: "Reina",
    age: 15
  },
]
}
