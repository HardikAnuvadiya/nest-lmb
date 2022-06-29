import { Controller, Get } from '@nestjs/common';
import { AdditionalService } from './additional.service';

@Controller('/add')
export class AdditionalController {
  constructor(private readonly additionalService: AdditionalService) {}

  @Get('/')
  public getSomeAdditionalInfo(): { data: number } {
    return { data: this.additionalService.getSomeAdditionalInfo() };
  }
}
