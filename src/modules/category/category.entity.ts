import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  createdAt!: Date;

}
