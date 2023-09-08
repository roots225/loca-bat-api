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
exports.PropertyService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PropertyService = class PropertyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        try {
            const items = await this.prisma.property.findMany({
                skip: 0,
                take: 10,
            });
            return {
                success: true,
                data: items,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async getByID(dto) {
        try {
            const property = await this.prisma.property.findFirst({
                where: {
                    id: dto.id,
                },
            });
            return {
                success: true,
                data: property,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async add(dto) {
        try {
            const property = await this.prisma.property.create({
                data: dto,
            });
            return {
                success: true,
                data: property,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async delete(dto) {
        try {
            const property = await this.prisma.property.delete({
                where: {
                    id: dto.id,
                },
            });
            return {
                success: true,
                data: property,
            };
        }
        catch (error) {
            throw error;
        }
    }
};
PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PropertyService);
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map