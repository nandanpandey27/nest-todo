import { IsInt, IsString } from 'class-validator';
export class UpdateTodo {
  @IsInt()
  id?: number;

  @IsString()
  title?: string;
}
