import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as AWS from 'aws-sdk';
import * as process from "process";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Book Crud API')
    .setDescription('Hiring testing task')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  // AWS.config.update({
  //   accessKeyId: process.env.ACCESS_KEY,
  //   secretAccessKey: process.env.SECRETKEY,
  //   region: process.env.REGION,
  // });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);


  await app.listen(3000);


}
bootstrap();
