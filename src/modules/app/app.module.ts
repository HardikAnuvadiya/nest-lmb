import { Module } from '@nestjs/common';
import { AdditionalModule } from '../additional/additional.module';
import { AppController } from './app.controller';

@Module({
  imports: [AdditionalModule],
  controllers: [AppController]
})
export class AppModule {}
