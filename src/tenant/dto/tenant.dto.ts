import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { addUserDto } from 'src/user/dto';

export class addTenantDto extends addUserDto {
  @ApiProperty({
    example: 'tenant',
    description: '',
  })
  @IsString()
  role: string;

  @ApiProperty({
    example: '0709887766',
    description: 'phone number',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: '',
    description: '',
  })
  @IsNotEmpty()
  @Type(() => Number)
  agency_id: number;
}

export class getByIdDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: '',
  })
  @Type(() => Number)
  id: number;
}

export class addTenantPropertyDto {
  @ApiProperty({
    example: '9',
    description: '',
  })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  tenant_id: number;

  @ApiProperty({
    example: '2',
    description: '',
  })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  property_id: number;

  @ApiProperty({
    example: '2023-03-12',
    description: '',
  })
  @IsNotEmpty()
  @Type(() => Date)
  enter_date: string;

  @ApiProperty({
    example: '2023-03-12',
    description: '',
  })
  @Type(() => Date)
  leave_date: string;
}

export class processPaymentDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  property_id: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  payment_id: number;
}
