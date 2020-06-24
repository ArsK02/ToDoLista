import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistPageComponent } from './todolist.component';

describe('TodolistPageComponent', () => {
  let component: TodolistPageComponent;
  let fixture: ComponentFixture<TodolistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
