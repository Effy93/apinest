import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';

@Entity('ad')
export class Ad {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column('varchar', { length: 100 })
  title!: string;

  @Column('varchar', { length: 200 })
  content!: string;

  @Column('decimal', { precision: 8, scale: 2 })
  price!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.ads, {
    eager: true,
  })
  user!: User;

  @OneToMany(() => Category, (category) => category.ads)
  category!: Category;
}
