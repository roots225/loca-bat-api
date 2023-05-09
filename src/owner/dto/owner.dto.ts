import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { addUserDto } from 'src/user/dto';

export class addOwnerDto extends addUserDto {
  @ApiProperty({
    example: 'owner',
    description: 'user role can be admin, employee, owner, tenant',
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
  @Type(() => Number)
  @IsNotEmpty()
  agency_id: number;
}

export class addOwnerPropertyDto {
  @ApiProperty({
    example: '',
    description: '',
  })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  owner_id: number;

  @ApiProperty({
    example: '',
    description: '',
  })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  property_id: number;
}
