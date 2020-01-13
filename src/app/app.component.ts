import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
// export class AppComponent {
//   title = 'NG421wk1day1ToDoApp';
// }
export class AppComponent {
  title = "Todos";
  todoList: any[] = [];
  todoTitle: string;
  ngOnInit() {
    this.todoTitle = "";
    this.todoList = [{ title: "Install Angular CLI", isDone: false }];
  }
  // add method
  addTodo():void {
    this.todoList.push({
      title: this.todoTitle,
    isDone: false
    });
    //reset to empty string
    this.todoTitle = '';
  }
  // delete method
  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
