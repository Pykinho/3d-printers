import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './material.entity';
import { CreateMaterialDto } from './dto/create-material.dto';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private readonly materialsRepository: Repository<Material>,
  ) {}

  findAll() {
    return this.materialsRepository.find();
  }

  create(createMaterialDto: CreateMaterialDto) {
    const material = this.materialsRepository.create(createMaterialDto);
    return this.materialsRepository.save(material);
  }
}
