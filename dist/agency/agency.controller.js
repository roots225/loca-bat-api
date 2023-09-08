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
exports.AgencyController = void 0;
const common_1 = require("@nestjs/common");
const guard_1 = require("../auth/guard");
const agency_service_1 = require("./agency.service");
const agency_dto_1 = require("./dto/agency.dto");
const swagger_1 = require("@nestjs/swagger");
let AgencyController = class AgencyController {
    constructor(agencyService) {
        this.agencyService = agencyService;
    }
    getAgencies() {
        return this.agencyService.getAll();
    }
    show(dto) {
        return this.agencyService.get(dto);
    }
    store(dto) {
        return this.agencyService.store(dto);
    }
    delete(dto) {
        return this.agencyService.delete(dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "getAgencies", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agency_dto_1.getOneAgencyDto]),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "show", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agency_dto_1.addAgencyDto]),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "store", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agency_dto_1.deleteAgencyDto]),
    __metadata("design:returntype", void 0)
], AgencyController.prototype, "delete", null);
AgencyController = __decorate([
    (0, swagger_1.ApiTags)('agencies'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Controller)('agencies'),
    __metadata("design:paramtypes", [agency_service_1.AgencyService])
], AgencyController);
exports.AgencyController = AgencyController;
//# sourceMappingURL=agency.controller.js.map