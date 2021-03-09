import { Injectable } from '@nestjs/common';
import { Todo } from './../interfaces/todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  find(id: string): Todo {
    return this.todos.find((todo) => todo.id === parseInt(id));
  }

  update(id: string, todo: Todo): Todo {
    const td: Todo = this.todos.find((todo) => todo.id === parseInt(id));
    this.todos.splice(parseInt(id), 1, { ...td, ...todo });
    return todo;
  }

  delete(id: string): Todo {
    const todo: Todo | undefined = this.todos.find(
      (todo) => todo.id === parseInt(id),
    );
    this.todos.splice(parseInt(id), 1);
    return todo;
  }
}
