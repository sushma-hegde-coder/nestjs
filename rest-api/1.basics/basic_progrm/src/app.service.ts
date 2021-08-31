import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTestFromService(): string {
    return 'Im getting get method from service app.service.ts';
  }
}
