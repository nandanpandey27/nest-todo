import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { LoggerMiddleware } from './../common/middlewares/logger.middleware';
import { HttpExceptionFilter } from './../common/exception-filters/http.exception-filter';

@Module({
  providers: [TodoService, HttpExceptionFilter],
  imports: [],
  exports: [TodoService, HttpExceptionFilter],
  controllers: [TodoController],
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TodoController);
  }
}
