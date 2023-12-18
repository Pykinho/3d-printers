import { IsNotEmpty, IsString, IsDate, IsNumber } from 'class-validator';

export class CreatePrintDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsDate()
  start: Date;

  @IsNotEmpty()
  @IsDate()
  end: Date;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  materialId: number;

  @IsNotEmpty()
  @IsNumber()
  printerId: number;
}
