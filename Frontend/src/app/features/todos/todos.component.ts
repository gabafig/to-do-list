import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from './todos.service';
import { CommonModule } from '@angular/common';
import { Todos } from '../../models/todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  constructor(private todosService: TodosService) {}

  newTitle = '';

get todos(): Todos[] {
  return this.todosService.list();
}

  addTask(): void {
    const title = this.newTitle.trim();
    if (!title) return; 
    this.todosService.add(title);
    this.newTitle=''
  }

remove(i: number): void {
  this.todosService.remove(i)
}

clearAll(): void {
  this.todosService.clearAll();
}

toggleDone(id:number): void {
  this.todosService.toggleDone(id);
}

get countPending(): number {
  return this.todos.filter(x => !x.done).length;
}

}
