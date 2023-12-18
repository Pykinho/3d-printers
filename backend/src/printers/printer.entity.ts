import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Printer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
