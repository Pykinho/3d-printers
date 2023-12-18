"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const typeorm_1 = require("typeorm");
const printer_entity_1 = require("../printers/printer.entity");
const material_entity_1 = require("../materials/material.entity");
let Print = class Print {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Print.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Print.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Print.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Print.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Print.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Print.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Print.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Print.prototype, "materialId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Print.prototype, "printerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_entity_1.Material, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'materialId' }),
    __metadata("design:type", material_entity_1.Material)
], Print.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => printer_entity_1.Printer, (printer) => printer.id),
    (0, typeorm_1.JoinColumn)({ name: 'printerId' }),
    __metadata("design:type", printer_entity_1.Printer)
], Print.prototype, "printer", void 0);
Print = __decorate([
    (0, typeorm_1.Entity)()
], Print);
exports.Print = Print;
//# sourceMappingURL=print.entity.js.map