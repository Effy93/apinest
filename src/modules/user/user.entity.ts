import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Ad } from '../ads/ads.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity('user')
export class User {
  constructor(name: string, email: string, password: string, role: UserRole) {
    this.name = name;
      this.email = email;
      this.password = password;
      this.role = role;
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 100 })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({
    type: 'set',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @OneToMany(() => Ad, (ad) => ad.user, {
    cascade: ['remove'],
  })
  ads!: Ad[];
}
