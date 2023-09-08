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
exports.TenantService = void 0;
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const common_1 = require("@nestjs/common");
let TenantService = class TenantService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        try {
            const items = await this.prisma.tenant.findMany({
                skip: 0,
                take: 10,
                include: {
                    user: true,
                },
            });
            return {
                success: true,
                data: items,
            };
        }
        catch (error) {
            return {
                error,
                message: error.message,
                prisma: JSON.stringify(this.prisma),
            };
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
                    role: 'tenant',
                    phone: dto.phone,
                    password: hash,
                },
            });
            const tenant = await this.prisma.tenant.create({
                data: {
                    agency_id: dto.agency_id,
                    user_id: user.id,
                },
            });
            return {
                success: true,
                data: Object.assign(Object.assign({}, user), tenant),
            };
        }
        catch (error) {
            return {
                error,
                message: error.message,
            };
            throw error;
        }
    }
    async addProperty(dto) {
        try {
            const data = await this.prisma.tenantProperty.create({
                data: dto,
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
    async getTenantProperties(dto) {
        try {
            const tenant = await this.prisma.tenant.findMany({
                where: {
                    user_id: dto.id,
                },
                include: {
                    properties: true,
                },
            });
            return {
                success: true,
                data: tenant,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async getPayments(dto) {
        try {
            const tenant = await this.prisma.payment.findMany({
                where: {
                    tenant_id: dto.id,
                },
                include: {
                    transactions: true,
                },
            });
            return {
                success: true,
                data: tenant,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async processPayment(dto) {
        try {
            const trx = {
                amount: 100000,
                status: 'CREATED',
                type: 'CREDIT',
                property_id: dto.property_id,
                start_period: '',
                end_period: '',
                payment_method: 'OM',
                payment_id: dto.payment_id,
            };
            const transaction = await this.prisma.transaction.create({
                data: trx,
            });
            const payment = await this.prisma.payment.update({
                where: {
                    id: dto.payment_id,
                },
                data: {
                    status: 'PAID',
                },
            });
            return {
                success: true,
                data: { payment, transaction },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async delete(dto) {
        try {
            const tenant = await this.prisma.tenant.delete({
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
                data: tenant,
            };
        }
        catch (error) {
            throw error;
        }
    }
};
TenantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TenantService);
exports.TenantService = TenantService;
//# sourceMappingURL=tenant.service.js.map