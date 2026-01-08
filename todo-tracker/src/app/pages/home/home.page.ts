import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { TodoService, Todo } from '../../services/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';
  isLoggedIn = false;

  // Edit modal properties
  isEditModalOpen = false;
  editingTodo: Todo = {
    id: 0,
    title: '',
    completed: false,
    description: '',
    dueDate: ''
  };

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkAuth();
    this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
    });
  }

  checkAuth() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo({
        title: this.newTodoTitle.trim(),
        completed: false,
        description: '',
        dueDate: ''
      });
      this.newTodoTitle = '';
    }
  }

  toggleTodo(todo: Todo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed });
  }

  deleteTodo(id: number) {
    this.showDeleteConfirmation(id);
  }

  editTodo(todo: Todo) {
    this.editingTodo = { ...todo };
    this.isEditModalOpen = true;
  }

  saveEditedTodo() {
    if (this.editingTodo.title.trim()) {
      this.todoService.updateTodo(this.editingTodo.id, {
        title: this.editingTodo.title.trim(),
        description: this.editingTodo.description,
        dueDate: this.editingTodo.dueDate,
        completed: this.editingTodo.completed
      });
      this.closeEditModal();
    }
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.editingTodo = {
      id: 0,
      title: '',
      completed: false,
      description: '',
      dueDate: ''
    };
  }

  private showDeleteConfirmation(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.todoService.deleteTodo(id);
    }
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }
}
