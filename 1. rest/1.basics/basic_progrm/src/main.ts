import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//bootstraping : initialising or setting up the application
async function bootstrap() {
  const app = await NestFactory.create(AppModule); //AppModule is my application
  await app.listen(3000);
}
bootstrap();
