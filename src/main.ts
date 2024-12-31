import { getMetadataStorage } from 'class-validator';

import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    forceCloseConnections: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: process.env.NODE_ENV !== 'production',
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      transform: true,
    }),
  );
  app.use;
  //app.enableCors();
  app.setGlobalPrefix('api');

  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   defaultVersion: '1',
  // });
  console.log(process.env.NODE_ENV !== 'production');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
