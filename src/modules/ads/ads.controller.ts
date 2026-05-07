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
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';

@Controller('ads')
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Post()
  async create(@Body() createAdDto: CreateAdDto) {
    return await this.adService.create(createAdDto);
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
  async update(@Param('id') id: number, @Body() updateAdDto: UpdateAdDto) {
    return await this.adService.update(id, updateAdDto);
  }
}
