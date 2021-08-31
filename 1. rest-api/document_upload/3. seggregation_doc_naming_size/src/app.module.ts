import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', //can give here dest, by default the files go in this folder
      //it will take the destination folder given in controller if it is specified in controller
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
