import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';

import helmet from 'helmet';

import { AppModule } from './app.module';
import { TransformInterceptor } from './@core/interceptors/transform.interceptor';

function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Number to Word (T9)')
    .setDescription('A simple Number to Word (T9)')
    .setVersion('0.1.0')
    .addTag('number-to-word')
    .addTag('words')
    .addTag('health-check')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());

  const configService = app.get(ConfigService);
  const port = configService.get('API_PORT');

  setupSwagger(app);

  await app.listen(port);
  console.log(`🚀 Server running on ${await app.getUrl()}`);
}
bootstrap();
