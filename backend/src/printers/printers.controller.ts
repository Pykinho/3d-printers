import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrintersService } from './printers.service';
import { CreatePrinterDto } from './dto/create-printer.dto';

@Controller('printers')
export class PrintersController {
  constructor(private readonly printersService: PrintersService) {}

  @Get()
  findAll() {
    return this.printersService.findAll();
  }

  @Post()
  create(@Body() createPrinterDto: CreatePrinterDto) {
    return this.printersService.create(createPrinterDto);
  }
}
