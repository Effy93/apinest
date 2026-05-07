import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() body: any) {
    return await this.categoryService.create(body);
  }

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.categoryService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.categoryService.remove(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    return await this.categoryService.update(id, body);
  }
}
