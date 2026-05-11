import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async findOne(id: string) {
    const user = await this.usersRepo.findOneBy({id: id});
    if (!user) throw new NotFoundException(`User #${id} introuvable`);
    return user;
  }

  async register(createUserDto: CreateUserDto) {
    const newUser = this.usersRepo.create(createUserDto);
    return this.usersRepo.save(newUser);
  }

  async update(id: string, dto: Partial<User>) {
    await this.usersRepo.findOneBy({ id: id });
    await this.usersRepo.update(id, dto);
    await this.usersRepo.save(dto);
  }

  async remove(id: string) {
    await this.usersRepo.findOneBy({ id: id });
    await this.usersRepo.delete(id);
    return { message: `User #${id} supprimé` };
  }
}
