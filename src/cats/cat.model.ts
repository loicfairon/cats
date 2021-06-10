import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ICat } from './cat.interface';

@Entity()
export class Cat implements ICat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
