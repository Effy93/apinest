import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: any) {
    return await this.userService.create(body);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.userService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.remove(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() body: any) {
    return await this.userService.update(id, body);
  }
}
