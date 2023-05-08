import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class integerIDDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    example: '',
    description: '',
  })
  @Type(() => Number)
  id: number;
}
