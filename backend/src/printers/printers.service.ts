import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Printer } from './printer.entity';
import { CreatePrinterDto } from './dto/create-printer.dto';

@Injectable()
export class PrintersService {
  constructor(
    @InjectRepository(Printer)
    private readonly printersRepository: Repository<Printer>,
  ) {}

  findAll() {
    return this.printersRepository.find();
  }

  create(createPrinterDto: CreatePrinterDto) {
    const printer = this.printersRepository.create(createPrinterDto);
    return this.printersRepository.save(printer);
  }
}
