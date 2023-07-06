import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Цоль контроллера - связать путь и выполняемую функцию
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // путь по умолчанию
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test') // путь "/test"
  getTest(): string {
    return this.appService.getTest();
  }
}
