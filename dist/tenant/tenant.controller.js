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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantController = void 0;
const common_1 = require("@nestjs/common");
const tenant_service_1 = require("./tenant.service");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const guard_1 = require("../auth/guard");
let TenantController = class TenantController {
    constructor(tenantService) {
        this.tenantService = tenantService;
    }
    getAll() {
        return this.tenantService.getAll();
    }
    store(dto) {
        return this.tenantService.add(dto);
    }
    getOneOwner(dto) {
        return { dto };
        return this.tenantService.delete(dto);
    }
    getTenantProperties(dto) {
        return this.tenantService.getTenantProperties(dto);
    }
    getPayments(dto) {
        return this.tenantService.getPayments(dto);
    }
    processPayment(dto) {
        return this.tenantService.processPayment(dto);
    }
    storeTenantProperty(dto) {
        return this.tenantService.addProperty(dto);
    }
    deleteOwner(dto) {
        return this.tenantService.delete(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.addTenantDto]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "store", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getByIdDto]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "getOneOwner", null);
__decorate([
    (0, common_1.Get)(':id/properties'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getByIdDto]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "getTenantProperties", null);
__decorate([
    (0, common_1.Get)(':id/payments'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getByIdDto]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "getPayments", null);
__decorate([
    (0, common_1.Post)('process-payment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.processPaymentDto]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "processPayment", null);
__decorate([
    (0, common_1.Post)(':id/property'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.addTenantPropertyDto]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "storeTenantProperty", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getByIdDto]),
    __metadata("design:returntype", void 0)
], TenantController.prototype, "deleteOwner", null);
TenantController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, swagger_1.ApiTags)('tenants'),
    (0, common_1.Controller)('tenants'),
    __metadata("design:paramtypes", [tenant_service_1.TenantService])
], TenantController);
exports.TenantController = TenantController;
//# sourceMappingURL=tenant.controller.js.map