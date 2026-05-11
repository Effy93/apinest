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
  constructor(title: string, content: string, price: number) {
    this.title = title;
    this.content = content;
    this.price = price;
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 100 })
  title: string;

  @Column('varchar', { length: 200 })
  content: string;

  @Column('decimal', { precision: 8, scale: 2 })
  price: number;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.ads, {
    eager: true,
  })
  user!: User;

  @ManyToOne(() => Category, (category) => category.ad)
  categories!: Category[];
}
