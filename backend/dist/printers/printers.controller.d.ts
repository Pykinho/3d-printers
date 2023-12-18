import { PrintersService } from './printers.service';
import { CreatePrinterDto } from './dto/create-printer.dto';
export declare class PrintersController {
    private readonly printersService;
    constructor(printersService: PrintersService);
    findAll(): Promise<import("./printer.entity").Printer[]>;
    create(createPrinterDto: CreatePrinterDto): Promise<import("./printer.entity").Printer>;
}
