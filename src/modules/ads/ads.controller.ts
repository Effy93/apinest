import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { AdService } from './ads.service';

@Controller('ads')
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Post()
  async create(@Body() body: any) {
    return await this.adService.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.adService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.adService.remove(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    return await this.adService.update(id, body);
  }
}
