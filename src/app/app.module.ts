import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTodoComponent } from './components/input-todo/input-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { DeleteTodoComponent } from './components/delete-todo/delete-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    EditTodoComponent,
    ListTodosComponent,
    DeleteTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
