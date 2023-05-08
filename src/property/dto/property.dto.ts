import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class addPropertyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'immeuble web help',
    description: '',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'immeuble',
    description: '',
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'immeuble web help description',
    description: '',
  })
  description: string;

  @IsInt()
  @ApiProperty({
    example: '',
    description: '',
  })
  @Type(() => Number)
  owner_id: number;

  @IsInt()
  @ApiProperty({
    example: '',
    description: '',
  })
  @Type(() => Number)
  tenant_id: number;

  @IsNumber()
  @ApiProperty({
    example: '',
    description: '',
  })
  @Type(() => Number)
  monthly_cost: number;

  @IsInt()
  @ApiProperty({
    example: '',
    description: '',
  })
  @Type(() => Number)
  rent_deposit: number;

  @IsInt()
  @ApiProperty({
    example: '',
    description: '',
  })
  @Type(() => Number)
  rent_advance: number;

  @IsString()
  @ApiProperty({
    example: '',
    description: '',
  })
  address: string;

  @IsString()
  @ApiProperty({
    example: '',
    description: '',
  })
  photo: string;
}
