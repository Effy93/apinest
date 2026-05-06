import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ad } from '../ads/ads.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  createdAt!: Date;

  @OneToMany(() => Ad, (ad) => ad.user)
  ads!: Ad[];
}
