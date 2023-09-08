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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const runtime_1 = require("@prisma/client/runtime");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(dto) {
        try {
            const hash = await argon.hash(dto.password);
            const user = await this.prisma.user.create({
                data: {
                    lastname: dto.lastname,
                    firstname: dto.firstname,
                    email: dto.email,
                    role: dto.role,
                    password: hash,
                },
            });
            return { user };
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError ||
                error.code == 'P2002') {
                throw new common_1.ForbiddenException('Account already exist');
            }
            throw error;
        }
    }
    async update(dto) {
        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                role: dto.role,
                password: hash,
            },
        });
        return { user };
    }
    async delete(dto) {
        try {
            const user = await this.prisma.user.delete({
                where: {
                    id: dto.id,
                },
            });
            return { user };
        }
        catch (error) {
            throw new common_1.ForbiddenException('failed to delete user');
        }
    }
    async changePassword(dto) {
        try {
            const user = await this.prisma.user.findUniqueOrThrow({
                where: {
                    id: dto.user_id,
                },
            });
            if (!user) {
                throw new common_1.ForbiddenException('Aucun utilisateur trouvé.');
            }
            const pwMatches = await argon.verify(user.password, dto.password);
            if (!pwMatches) {
                throw new common_1.ForbiddenException('Credentials incorrect');
            }
            const hash = await argon.hash(dto.new_password);
            const newUser = await this.prisma.user.update({
                where: {
                    id: dto.user_id,
                },
                data: {
                    password: hash,
                },
            });
            return { user: newUser };
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2025') {
                    throw new common_1.ForbiddenException('User not found');
                }
            }
            throw new common_1.InternalServerErrorException('Serveur indisponible');
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map