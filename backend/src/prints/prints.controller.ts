import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrintsService } from './prints.service';
import { CreatePrintDto } from './dto/create-print.dto';

@Controller('prints')
export class PrintsController {
  constructor(private readonly printsService: PrintsService) {}

  @Get()
  findAll() {
    return this.printsService.findAll();
  }

  @Post()
  create(@Body() createPrintDto: CreatePrintDto) {
    return this.printsService.create(createPrintDto);
  }
}
