import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RncsModule } from './rncs/rncs.module';

@Module({
  imports: [RncsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
