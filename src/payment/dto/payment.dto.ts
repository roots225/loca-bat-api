import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class addPaymentDto {
  @IsNotEmpty()
  @ApiProperty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  tenant_id: number;
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  property_id: number;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Date)
  start_period: Date;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Date)
  end_period: Date;
}
