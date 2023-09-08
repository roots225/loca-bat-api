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
exports.OwnerController = void 0;
const common_1 = require("@nestjs/common");
const owner_service_1 = require("./owner.service");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const guard_1 = require("../auth/guard");
const dto_2 = require("../dto");
let OwnerController = class OwnerController {
    constructor(ownerService) {
        this.ownerService = ownerService;
    }
    getAll() {
        return this.ownerService.getAll();
    }
    store(dto) {
        return this.ownerService.add(dto);
    }
    getOneOwner(dto) {
        return { dto };
        return this.ownerService.delete(dto);
    }
    getOwnerProperties(dto) {
        return this.ownerService.getOwnerProperties(dto);
    }
    storeOwnerProperty(dto) {
        return this.ownerService.addProperty(dto);
    }
    deleteOwner(dto) {
        return this.ownerService.delete(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.addOwnerDto]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "store", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.integerIDDto]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "getOneOwner", null);
__decorate([
    (0, common_1.Get)(':id/properties'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.integerIDDto]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "getOwnerProperties", null);
__decorate([
    (0, common_1.Post)(':id/property'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.addOwnerPropertyDto]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "storeOwnerProperty", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.integerIDDto]),
    __metadata("design:returntype", void 0)
], OwnerController.prototype, "deleteOwner", null);
OwnerController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, swagger_1.ApiTags)('owners'),
    (0, common_1.Controller)('owners'),
    __metadata("design:paramtypes", [owner_service_1.OwnerService])
], OwnerController);
exports.OwnerController = OwnerController;
//# sourceMappingURL=owner.controller.js.map