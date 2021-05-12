import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //enable app level validation for request data
  //even though it is available throughout the application, this logic works only for the places where you have used validation function
  app.enableCors();
  //Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('API about things in nature')
    .setDescription('The swagger API documentation sample for nature') //for users of api
    .setVersion('1.0')
    //.addTag('Things in nature') //default tag remove it if you don't want
    .build();
  const document = SwaggerModule.createDocument(app, config); //swagger is a tool  ....this is for the user of application
  SwaggerModule.setup('api-docs', app, document); //DOCS : localhost:3000/api-docs

  await app.listen(3000);
}
bootstrap();
