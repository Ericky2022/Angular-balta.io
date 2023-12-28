import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../models/todo.model.ts/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas tarefas';

  /**
   *
   */
  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'Ir ao mercado', false));
    this.todos.push(new Todo(3, 'cortar o cabelo', true));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index != -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(){

  }

  markUnDone(){

  }
}
