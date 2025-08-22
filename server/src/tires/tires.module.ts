import { Module } from '@nestjs/common';
import { TiresController } from './tires.controller';
import { TiresService } from './tires.service';

@Module({
  controllers: [TiresController],
  providers: [TiresService]
})
export class TiresModule {}
