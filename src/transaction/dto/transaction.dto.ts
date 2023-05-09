import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class addTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  status: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  property_id: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  payment_id: number;

  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty()
  start_period: Date;

  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty()
  end_period: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  payment_method: string;
}
