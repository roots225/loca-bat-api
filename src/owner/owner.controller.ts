import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { ApiTags } from '@nestjs/swagger';
import { addOwnerDto, getByIdDto } from './dto';

@ApiTags('owners')
@Controller('owners')
export class OwnerController {
  constructor(private ownerService: OwnerService) {}

  @Get()
  getAll() {
    return this.ownerService.getAll();
  }

  @Post()
  store(@Body() dto: addOwnerDto) {
    return this.ownerService.add(dto);
  }

  @Get(':id')
  getOneOwner(@Param() dto: getByIdDto) {
    return { dto };
    return this.ownerService.delete(dto);
  }

  @Delete(':id')
  deleteOwner(@Param() dto: getByIdDto) {
    return this.ownerService.delete(dto);
  }
}
