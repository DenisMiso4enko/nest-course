import { Injectable } from '@nestjs/common';


// описываем те функции которые вызывем из контроллера
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): string {
    return 'Test World!';
  }
}
