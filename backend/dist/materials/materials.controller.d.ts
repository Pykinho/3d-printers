import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dto/create-material.dto';
export declare class MaterialsController {
    private readonly materialsService;
    constructor(materialsService: MaterialsService);
    findAll(): Promise<import("./material.entity").Material[]>;
    create(createMaterialDto: CreateMaterialDto): Promise<import("./material.entity").Material>;
}
