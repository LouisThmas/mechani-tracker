import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiresModule } from './tires/tires.module';

@Module({
  imports: [TiresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
