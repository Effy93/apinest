import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ad } from './ads.entity';
import { Repository } from 'typeorm';

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

  async create(adData: any) {
    const newAd = this.adsRepo.create(adData);
    return this.adsRepo.save(newAd);
  }

  async update(id: number, body: any) {
    await this.adsRepo.findOneBy({ id });
    await this.adsRepo.update(id, body);
    await this.adsRepo.save(body);
  }

  async remove(id: number) {
    await this.adsRepo.findOneBy({ id });
    await this.adsRepo.delete.apply(id);
    return { message: `Annonce #${id} supprimée!` };
  }
}
