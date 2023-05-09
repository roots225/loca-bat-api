import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { addOwnerDto, addOwnerPropertyDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import { integerIDDto } from 'src/dto';

@ApiBearerAuth()
@UseGuards(JwtGuard)
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
  getOneOwner(@Param() dto: integerIDDto) {
    return { dto };
    return this.ownerService.delete(dto);
  }

  @Get(':id/properties')
  getOwnerProperties(@Param() dto: integerIDDto) {
    return this.ownerService.getOwnerProperties(dto);
  }

  @Post(':id/property')
  storeOwnerProperty(@Body() dto: addOwnerPropertyDto) {
    return this.ownerService.addProperty(dto);
  }

  @Delete(':id')
  deleteOwner(@Param() dto: integerIDDto) {
    return this.ownerService.delete(dto);
  }
}
