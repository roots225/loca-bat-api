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
exports.deleteDto = exports.changePasswordDto = exports.addUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const passwordLengthMessage = 'Le mot de passe doit etre superieur a 8 characteres';
class addUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@doe.fr', description: 'user email' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password', description: 'user password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, {
        message: passwordLengthMessage,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'admin',
        description: 'user role can be admin, employee, owner, tenant',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addUserDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john',
        description: 'user lastname',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addUserDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], addUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'doe',
        description: 'user firstname',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addUserDto.prototype, "firstname", void 0);
exports.addUserDto = addUserDto;
class changePasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'enter current password' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], changePasswordDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'enter current password' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MinLength)(8, {
        message: passwordLengthMessage,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], changePasswordDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'enter new password' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], changePasswordDto.prototype, "new_password", void 0);
exports.changePasswordDto = changePasswordDto;
class deleteDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], deleteDto.prototype, "id", void 0);
exports.deleteDto = deleteDto;
//# sourceMappingURL=user.dto.js.map