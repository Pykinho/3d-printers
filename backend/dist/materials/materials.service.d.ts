import { Repository } from 'typeorm';
import { Material } from './material.entity';
import { CreateMaterialDto } from './dto/create-material.dto';
export declare class MaterialsService {
    private readonly materialsRepository;
    constructor(materialsRepository: Repository<Material>);
    findAll(): Promise<Material[]>;
    create(createMaterialDto: CreateMaterialDto): Promise<Material>;
}
