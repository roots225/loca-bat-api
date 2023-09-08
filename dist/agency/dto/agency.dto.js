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
exports.deleteAgencyDto = exports.getOneAgencyDto = exports.addAgencyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class addAgencyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'luxe immo', description: 'nom de lagence' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addAgencyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: '0709889988', description: 'numero de lagence' }),
    __metadata("design:type", String)
], addAgencyDto.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: '', description: '' }),
    __metadata("design:type", String)
], addAgencyDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: '', description: '' }),
    __metadata("design:type", String)
], addAgencyDto.prototype, "address", void 0);
exports.addAgencyDto = addAgencyDto;
class getOneAgencyDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({ example: '', description: 'ID' }),
    __metadata("design:type", Number)
], getOneAgencyDto.prototype, "id", void 0);
exports.getOneAgencyDto = getOneAgencyDto;
class deleteAgencyDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, swagger_1.ApiProperty)({ example: '', description: 'ID' }),
    __metadata("design:type", Number)
], deleteAgencyDto.prototype, "id", void 0);
exports.deleteAgencyDto = deleteAgencyDto;
//# sourceMappingURL=agency.dto.js.map