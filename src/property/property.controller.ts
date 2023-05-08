import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PropertyService } from './property.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { integerIDDto } from 'src/dto';
import { addPropertyDto } from './dto';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@ApiTags('properties')
@Controller('properties')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  getAll() {
    return this.propertyService.getAll();
  }

  @Post()
  store(@Body() dto: addPropertyDto) {
    return this.propertyService.add(dto);
  }

  @Get(':id')
  show(@Body() dto: integerIDDto) {
    return this.propertyService.getByID(dto);
  }

  @Delete(':id')
  delete(@Param() dto: integerIDDto) {
    return this.propertyService.delete(dto);
  }
}
