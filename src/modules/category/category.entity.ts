import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Ad } from '../ads/ads.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Ad, (ad) => ad.category)
  ads: Ad[];
}
