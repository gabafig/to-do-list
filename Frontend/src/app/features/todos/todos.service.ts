import { Injectable } from '@angular/core';
import { Todos } from '../../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todos[] = [];
  private nextId = 1;

  constructor() { }

  
  add(title: string): void {
    this.todos.push({ id: this.nextId++, title, done: false });
  }
  
  remove(index: number): void {
    this.todos.splice(index, 1);
  }

  list(): Todos[] {
    return this.todos;
  }

  clearAll(): void {
    this.todos = [];
  }

  toggleDone(id: number): void {
  const t = this.todos.find(x => x.id === id);
  if (t) {
    t.done = !t.done;
  }
}

}
