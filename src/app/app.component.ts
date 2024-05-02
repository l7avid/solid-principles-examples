import { Component } from '@angular/core';
import { JavascriptStudent } from './interfaces/javascript-student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solid-principles-examples';

  student: JavascriptStudent = {
    id: "1",
    firstName: "David",
    lastName: "Reina",
    age: 26
  }
}
