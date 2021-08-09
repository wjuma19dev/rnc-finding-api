import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { log } from 'util';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  
  const logger = new Logger();
  await app.listen(3000);
  logger.log(`Server running on port ${await app.getUrl()}`)

}
bootstrap();
