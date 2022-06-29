import { Module } from '@nestjs/common';
import { AdditionalController } from './additional.controller';
import { AdditionalService } from './additional.service';

@Module({
  providers: [AdditionalService],
  controllers: [AdditionalController]
})
export class AdditionalModule {}
