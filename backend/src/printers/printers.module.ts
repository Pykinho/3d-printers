import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrintersController } from './printers.controller';
import { PrintersService } from './printers.service';
import { Printer } from './printer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Printer])],
  controllers: [PrintersController],
  providers: [PrintersService],
})
export class PrintersModule {}
