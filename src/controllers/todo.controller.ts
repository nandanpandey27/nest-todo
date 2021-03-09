import { Get, Post, Put, Param, Body, Controller, Delete } from '@nestjs/common';
import { TodoService } from './../services/todo.service';
import { Todo } from './../interfaces/todo.interface';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  index(): Todo[] {
    return this.todoService.findAll();
  }

  @Post('/create')
  create(@Body() todo: Todo): Todo {
    return this.todoService.create(todo);
  }

  @Get('/:id')
  find(@Param('id') id: string): Todo {
    return this.todoService.find(id);
  }

  @Put('/:id')
  upadte(@Param('id') id: string, @Body() todo): Todo {
    return this.todoService.update(id, todo);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Todo {
    return this.todoService.delete(id);
  }
}
