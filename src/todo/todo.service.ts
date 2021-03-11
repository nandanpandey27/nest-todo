import { Todo } from './interfaces/todo.interface';
import { UpdateTodo } from './dto/update.dto';
import { Injectable } from '@nestjs/common';

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

  find(id: number): Todo {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, todo: UpdateTodo): Todo {
    const index: number = this.todos.findIndex((todo: Todo) => todo.id === id);

    if (index > -1) {
      const td: Todo = { ...this.todos[index], ...todo };
      this.todos[index] = td;
      return td;
    }
    return null;
  }

  delete(id: number): Todo {
    const index: number = this.todos.findIndex((todo: Todo) => todo.id === id);

    if (index > -1) {
      const todo = this.todos[index];
      this.todos.splice(index, 1);
      return todo;
    }
    return null;
  }
}
