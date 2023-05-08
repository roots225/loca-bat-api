import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { AgencyService } from './agency.service';
import {
  addAgencyDto,
  deleteAgencyDto,
  getOneAgencyDto,
} from './dto/agency.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('agencies')
@UseGuards(JwtGuard)
@Controller('agencies')
export class AgencyController {
  constructor(private agencyService: AgencyService) {}

  @Get()
  getAgencies() {
    return this.agencyService.getAll();
  }

  @Get(':id')
  show(@Param() dto: getOneAgencyDto) {
    return this.agencyService.get(dto);
  }

  @Post()
  store(@Body() dto: addAgencyDto) {
    return this.agencyService.store(dto);
  }

  @Delete()
  delete(@Body() dto: deleteAgencyDto) {
    return this.agencyService.delete(dto);
  }
}
