import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

const passwordLengthMessage =
  'Le mot de passe doit etre superieur a 8 characteres';

export class addUserDto {
  @ApiProperty({ example: 'john@doe.fr', description: 'user email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @IsString()
  @MinLength(8, {
    message: passwordLengthMessage,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'admin',
    description: 'user role can be admin, employee, owner, tenant',
  })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    example: 'john',
    description: 'user lastname',
  })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  phone: string;

  @ApiProperty({
    example: 'doe',
    description: 'user firstname',
  })
  @IsString()
  @IsNotEmpty()
  firstname: string;
}

export class changePasswordDto {
  @ApiProperty({ example: '', description: 'enter current password' })
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty({ example: '', description: 'enter current password' })
  @IsEmail()
  @MinLength(8, {
    message: passwordLengthMessage,
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '', description: 'enter new password' })
  @IsString()
  @IsNotEmpty()
  new_password: string;
}

export class deleteDto {
  @IsInt()
  @Type(() => Number)
  id: number;
}
