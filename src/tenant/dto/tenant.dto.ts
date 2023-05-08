import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { addUserDto } from 'src/user/dto';

export class addTenantDto extends addUserDto {
  @ApiProperty({
    example: 'tenant',
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
