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
exports.processPaymentDto = exports.addTenantPropertyDto = exports.getByIdDto = exports.addTenantDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dto_1 = require("../../user/dto");
class addTenantDto extends dto_1.addUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'tenant',
        description: '',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], addTenantDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0709887766',
        description: 'phone number',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addTenantDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], addTenantDto.prototype, "agency_id", void 0);
exports.addTenantDto = addTenantDto;
class getByIdDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '',
    }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], getByIdDto.prototype, "id", void 0);
exports.getByIdDto = getByIdDto;
class addTenantPropertyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '9',
        description: '',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], addTenantPropertyDto.prototype, "tenant_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: '',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], addTenantPropertyDto.prototype, "property_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-03-12',
        description: '',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", String)
], addTenantPropertyDto.prototype, "enter_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-03-12',
        description: '',
    }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", String)
], addTenantPropertyDto.prototype, "leave_date", void 0);
exports.addTenantPropertyDto = addTenantPropertyDto;
class processPaymentDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], processPaymentDto.prototype, "property_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], processPaymentDto.prototype, "payment_id", void 0);
exports.processPaymentDto = processPaymentDto;
//# sourceMappingURL=tenant.dto.js.map