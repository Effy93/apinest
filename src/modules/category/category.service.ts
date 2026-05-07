import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async findOne(id: number) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) throw new NotFoundException(`Category #${id} introuvable`);
    return category;
  }
  async findAll() {
    return this.categoryRepo.find();
  }

  async create(categoryData: any) {
    const newCategory = this.categoryRepo.create(categoryData);
    return this.categoryRepo.save(newCategory);
  }

  async update(id: number, body: any) {
    const category = await this.findOne(id);
    Object.assign(category, body);
    return this.categoryRepo.save(category);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.categoryRepo.delete(id);
    return { message: `Category #${id} supprimée` };
  }
}
