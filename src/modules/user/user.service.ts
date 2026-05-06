import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async findOne(id: number) {
    const user = await this.usersRepo.findOneBy({ id });
    if (!user) throw new NotFoundException(`User #${id} introuvable`);
    return user;
  }

  async create(userData: any) {
    const newUser = await this.usersRepo.create(userData);
    return this.usersRepo.save(newUser);
  }

  async update(id: number, body: any) {
    await this.usersRepo.findOneBy({ id });
    await this.usersRepo.update(id, body);
    await this.usersRepo.save(body);
  }

  async remove(id: number) {
    await this.usersRepo.findOneBy({ id });
    await this.usersRepo.delete(id);
    return { message: `User #${id} supprimé` };
  }
}
