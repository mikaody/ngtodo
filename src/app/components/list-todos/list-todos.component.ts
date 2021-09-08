import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { Todo } from "src/app/classes/todo";

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Observable<Todo[]>;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  reloadData() {
    this.todos = this.todoService.getTodosList();
  }

  deleteEmployee(id: number) {
    this.todoService.deleteTodo(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
}
