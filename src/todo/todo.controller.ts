import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UseFilters,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TodoService } from './todo.service';
import { HttpExceptionFilter } from './../common/exception-filters/http.exception-filter';
import { AuthGuard } from './../common/guards/auth.guard';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  index(): Todo[] {
    return this.todoService.findAll();
  }

  @Post('/create')
  @UseGuards(AuthGuard)
  create(@Body() todo: Todo): Todo {
    return this.todoService.create(todo);
  }

  @Get('/:id')
  @UseFilters(new HttpExceptionFilter())
  find(@Param('id', ParseIntPipe) id: number): Todo {
    const todo: Todo = this.todoService.find(id);
    if (todo) {
      return todo;
    } else {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }

  @Put('/:id')
  upadte(@Param('id', ParseIntPipe) id: number, @Body() todo): Todo {
    return this.todoService.update(id, todo);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Todo {
    return this.todoService.delete(id);
  }
}
