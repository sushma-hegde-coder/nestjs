import { Controller, Logger, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private readonly appService: AppService) {}

  // Define the message pattern for this method
  @MessagePattern('display-hello')
  // Define the logic to be executed
  getHello() {
    return this.appService.getHello();
  }
}
