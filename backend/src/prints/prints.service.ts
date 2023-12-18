import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Print } from './print.entity';
import { CreatePrintDto } from './dto/create-print.dto';

@Injectable()
export class PrintsService {
  constructor(
    @InjectRepository(Print)
    private readonly printsRepository: Repository<Print>,
  ) {}

  findAll() {
    return this.printsRepository.find();
  }

  create(createPrintDto: CreatePrintDto) {
    const print = this.printsRepository.create(createPrintDto);
    return this.printsRepository.save(print);
  }
}
