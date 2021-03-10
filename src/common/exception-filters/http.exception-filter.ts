import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getResponse<Request>();
    //const next = ctx.getNext<NextFunction>();
    const status = exception.getStatus();

    console.log('Exception Filter');

    response.status(status).json({
      statusCode: status,
      path: request.url,
    });
  }
}
