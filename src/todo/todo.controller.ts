import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';

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
