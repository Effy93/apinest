import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ad } from './ads.entity';
import { Repository } from 'typeorm';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';

@Injectable()
export class AdService {
  constructor(
    @InjectRepository(Ad)
    private readonly adsRepo: Repository<Ad>,
  ) {}

  async findOne(id: number) {
    const ad = await this.adsRepo.findOneBy({ id });
    if (!ad) throw new NotFoundException(`Ad #${id}`);
    return ad;
  }

  async create(createAdDto: CreateAdDto) {
    const newAd = this.adsRepo.create(createAdDto);
    return this.adsRepo.save(newAd);
  }

  async update(id: number, updateAdDto: UpdateAdDto) {
    await this.adsRepo.findOneBy({ id });
    await this.adsRepo.update(id, updateAdDto);
    await this.adsRepo.save(updateAdDto);
  }

  async remove(id: number) {
    await this.adsRepo.findOneBy({ id });
    await this.adsRepo.delete.apply(id);
    return { message: `Annonce #${id} supprimée!` };
  }
}
