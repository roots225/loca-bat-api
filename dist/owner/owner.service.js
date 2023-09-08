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
exports.OwnerService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const common_1 = require("@nestjs/common");
let OwnerService = class OwnerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        try {
            const owners = await this.prisma.owner.findMany({
                skip: 0,
                take: 10,
                include: {
                    user: true,
                },
            });
            return {
                success: true,
                data: owners,
            };
        }
        catch (error) {
            console.log(error);
            return {
                error,
                message: error.message,
            };
            throw error;
        }
    }
    async getOwnerProperties(dto) {
        try {
            const owners = await this.prisma.ownerProperty.findMany({
                where: {
                    owner_id: dto.id,
                },
                include: {
                    owner: true,
                    property: true,
                },
            });
            return {
                success: true,
                data: owners,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async add(dto) {
        try {
            const hash = await argon.hash(dto.password);
            const user = await this.prisma.user.create({
                data: {
                    firstname: dto.firstname,
                    lastname: dto.lastname,
                    email: dto.email,
                    role: 'owner',
                    phone: dto.phone,
                    password: hash,
                },
            });
            const owner = await this.prisma.owner.create({
                data: {
                    agency_id: dto.agency_id,
                    user_id: user.id,
                },
            });
            return {
                success: true,
                data: Object.assign(Object.assign({}, user), owner),
            };
        }
        catch (error) {
            throw error;
        }
    }
    async addProperty(dto) {
        try {
            const data = await this.prisma.ownerProperty.create({
                data: {
                    owner_id: dto.owner_id,
                    property_id: dto.property_id,
                },
            });
            return {
                success: true,
                data,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async delete(dto) {
        try {
            const owner = await this.prisma.owner.delete({
                where: {
                    user_id: dto.id,
                },
            });
            await this.prisma.user.delete({
                where: {
                    id: dto.id,
                },
            });
            return {
                success: true,
                data: owner,
            };
        }
        catch (error) {
            throw error;
        }
    }
};
OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map