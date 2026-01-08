import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  dueDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);

  todos$ = this.todosSubject.asObservable();

  constructor() {
    this.loadTodos();
  }

  private loadTodos() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.todos = JSON.parse(saved);
      this.todosSubject.next(this.todos);
    }
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.todosSubject.next(this.todos);
  }

  addTodo(todo: Omit<Todo, 'id'>) {
    const newTodo: Todo = {
      ...todo,
      id: Date.now()
    };
    this.todos.push(newTodo);
    this.saveTodos();
  }

  updateTodo(id: number, updates: Partial<Todo>) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updates };
      this.saveTodos();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
  }

  getTodo(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }
}