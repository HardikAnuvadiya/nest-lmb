import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): { data: string } {
    return { data: 'test' };
  }

  @Get('/test-get')
  testReceive(): { data: string } {
    return { data: 'test get' };
  }

  @Post('/test-post')
  testCreate(@Body() data: any): { data: string } {
    return { data: JSON.stringify(data) };
  }
}
