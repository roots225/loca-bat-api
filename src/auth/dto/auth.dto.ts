import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'john@doe.fr', description: 'user email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class SignupDto {
  @ApiProperty({ example: 'john@doe.fr', description: 'user email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'admin',
    description: 'user role can be admin, employee, owner, tenant',
  })
  @IsString()
  @IsNotEmpty()
  role: string;
}
