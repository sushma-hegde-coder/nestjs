import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
