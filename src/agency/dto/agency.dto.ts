import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class getOneAgencyDto {
  @IsInt()
  @Type(() => Number)
  id: number;
}

export class addAgencyDto {
  @ApiProperty({ example: 'luxe immo', description: 'nom de lagence' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '0709889988', description: 'numero de lagence' })
  mobile: string;

  @IsString()
  @ApiProperty({ example: '', description: '' })
  phone: string;

  @IsString()
  @ApiProperty({ example: '', description: '' })
  address: string;
}

export class deleteAgencyDto {
  @IsInt()
  @Type(() => Number)
  id: number;
}
