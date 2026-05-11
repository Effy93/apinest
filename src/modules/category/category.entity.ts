import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Ad } from '../ads/ads.entity';

@Entity('category')
export class Category {

constructor(name: string,){
  this.name= name;
}

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 50 })
  name: string;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(() => Ad, (ad) => ad.categories)
  ad!: Ad;
}
