import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Printer } from '../printers/printer.entity';
import { Material } from '../materials/material.entity';

@Entity()
export class Print {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  user: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  materialId: number;

  @Column()
  printerId: number;

  @ManyToOne(() => Material, { eager: true })
  @JoinColumn({ name: 'materialId' })
  material: Material;

  @ManyToOne(() => Printer, (printer) => printer.id)
  @JoinColumn({ name: 'printerId' })
  printer: Printer;
}
