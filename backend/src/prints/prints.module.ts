import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrintsController } from './prints.controller';
import { PrintsService } from './prints.service';
import { Print } from './print.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Print])],
  controllers: [PrintsController],
  providers: [PrintsService],
})
export class PrintsModule {}
