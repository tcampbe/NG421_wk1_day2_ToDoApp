import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'NG421wk1day1ToDoApp';
// }
export class AppComponent {
  title = "Todos";
  todoList: any [] = [];
}
