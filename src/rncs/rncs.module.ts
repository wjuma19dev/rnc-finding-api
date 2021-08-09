import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rnc } from './entities/rnc.entity';
import { RncsController } from './rncs.controller';
import { RncsService } from './rncs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rnc])
  ],
  controllers: [RncsController],
  providers: [RncsService]
})
export class RncsModule {}
