import { Printer } from '../printers/printer.entity';
import { Material } from '../materials/material.entity';
export declare class Print {
    id: number;
    title: string;
    user: string;
    start: Date;
    end: Date;
    description: string;
    quantity: number;
    materialId: number;
    printerId: number;
    material: Material;
    printer: Printer;
}
