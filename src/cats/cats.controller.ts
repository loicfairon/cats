import { Body, Controller, Get, Post } from '@nestjs/common';
import { ICat } from './cat.interface';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly service: CatsService) {}

  @Get('cats')
  getHello(): Promise<ICat[]> {
    return this.service.getCats();
  }

  @Post('cat')
  addCat(@Body() cat: ICat) {
    return this.service.addCat(cat);
  }
}
