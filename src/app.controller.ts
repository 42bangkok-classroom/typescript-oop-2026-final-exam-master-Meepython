import { Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({

  })
  async getHello(): Promise<> {
    return this.appService.getHello();
  } 
}
