import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto ) {
    return await this.userService.register(createUserDto);
  }

  @Get(':id')
  async findOne(@Param() id: string ) {
    return await this.userService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.remove(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: string, @Body() dto: UpdateUserDto) {
    return await this.userService.update(id, dto);
  }
}
