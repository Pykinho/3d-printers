import { Repository } from 'typeorm';
import { Print } from './print.entity';
import { CreatePrintDto } from './dto/create-print.dto';
export declare class PrintsService {
    private readonly printsRepository;
    constructor(printsRepository: Repository<Print>);
    findAll(): Promise<Print[]>;
    create(createPrintDto: CreatePrintDto): Promise<Print>;
}
