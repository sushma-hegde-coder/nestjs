import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    //register the modules
  ],
  controllers: [
    // register the controller
    AppController
  ],
  providers: [
    //register the services
    AppService
  ],
})
export class AppModule {}
