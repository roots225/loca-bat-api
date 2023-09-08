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
exports.addOwnerPropertyDto = exports.addOwnerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const dto_1 = require("../../user/dto");
class addOwnerDto extends dto_1.addUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'owner',
        description: 'user role can be admin, employee, owner, tenant',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], addOwnerDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0709887766',
        description: 'phone number',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addOwnerDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '',
    }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], addOwnerDto.prototype, "agency_id", void 0);
exports.addOwnerDto = addOwnerDto;
class addOwnerPropertyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], addOwnerPropertyDto.prototype, "owner_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '',
        description: '',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], addOwnerPropertyDto.prototype, "property_id", void 0);
exports.addOwnerPropertyDto = addOwnerPropertyDto;
//# sourceMappingURL=owner.dto.js.map