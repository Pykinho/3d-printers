import { PrintsService } from './prints.service';
import { CreatePrintDto } from './dto/create-print.dto';
export declare class PrintsController {
    private readonly printsService;
    constructor(printsService: PrintsService);
    findAll(): Promise<import("./print.entity").Print[]>;
    create(createPrintDto: CreatePrintDto): Promise<import("./print.entity").Print>;
}
