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
exports.AgencyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const runtime_1 = require("@prisma/client/runtime");
const http_response_1 = require("../common/serializers/responses/http.response");
let AgencyService = class AgencyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        try {
            const agencies = await this.prisma.agency.findMany({
                skip: 0,
                take: 10,
            });
            return (0, http_response_1.successResponse)(agencies);
        }
        catch (error) { }
        return {
            data: [],
        };
    }
    async get(dto) {
        try {
            const agency = await this.prisma.agency.findFirst({
                where: {
                    id: dto.id,
                },
            });
            return (0, http_response_1.successResponse)(agency);
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                throw new common_1.NotFoundException('agency not found');
            }
            throw error;
        }
    }
    async store(dto) {
        try {
            const agency = await this.prisma.agency.create({
                data: dto,
            });
            return (0, http_response_1.successResponse)(agency, "L'agence a bien été ajoutée.");
        }
        catch (error) {
            throw new common_1.ServiceUnavailableException(error.message);
        }
    }
    async delete(dto) {
        try {
            const agency = await this.prisma.agency.delete({
                where: {
                    id: dto.id,
                },
            });
            return (0, http_response_1.successResponse)(agency, "L'agence a bien été supprimée.");
        }
        catch (error) {
            throw new common_1.ServiceUnavailableException(error.message);
        }
    }
};
AgencyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AgencyService);
exports.AgencyService = AgencyService;
//# sourceMappingURL=agency.service.js.map