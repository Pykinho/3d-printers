import { Repository } from 'typeorm';
import { Printer } from './printer.entity';
import { CreatePrinterDto } from './dto/create-printer.dto';
export declare class PrintersService {
    private readonly printersRepository;
    constructor(printersRepository: Repository<Printer>);
    findAll(): Promise<Printer[]>;
    create(createPrinterDto: CreatePrinterDto): Promise<Printer>;
}
