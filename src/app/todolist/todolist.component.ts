import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {

  todos: Todo[] = []
  todoTitle: string = ''
  todoListStorageKey = 'Todo_List'
  beforeEditing: string = ''

  constructor(private storageService: StorageService) {
    this.todos = storageService.getData(this.todoListStorageKey) || []
  }

  ngOnInit(): void {
  }

  private saveList() {
    this.storageService.setData(this.todoListStorageKey, this.todos);
  }

  addTodo() {
    if(this.todoTitle.trim().length === 0) {
      return
    }

    const todo: Todo = {
      title: this.todoTitle,
      id: this.todos.length + 1,
      completed: false,
      editing: false
    }

    this.todos.unshift(todo)

    this.saveList()

    this.todoTitle = this.todoTitle = ''
  }

  editTodo(todo: Todo): void {
    this.beforeEditing = todo.title
    todo.editing = true
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditing
    todo.editing = false
  }

  updateTodo(todo: Todo, changes) {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditing
    }

    const index = this.todos.indexOf(todo)
    this.todos[index] = { ...todo, ...changes }
    this.saveList()
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.saveList()
  }

  remaining():number {
    return this.todos.filter(todo => !todo.completed).length
  }
}
