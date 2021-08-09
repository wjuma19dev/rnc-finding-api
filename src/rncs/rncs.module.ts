import { Module } from '@nestjs/common';
import { RncsController } from './rncs.controller';
import { RncsService } from './rncs.service';

@Module({
  controllers: [RncsController],
  providers: [RncsService]
})
export class RncsModule {}
