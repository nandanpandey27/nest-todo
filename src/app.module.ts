import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoController } from './controllers/todo.controller';
import { AppService } from './app.service';
import { TodoService } from './services/todo.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
