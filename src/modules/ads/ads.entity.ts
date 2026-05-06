import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('ad')
export class Ad {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column()
  price!: number;

  @Column()
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.ads)
  user!: User;
}
