import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { ApiTags } from '@nestjs/swagger';
import { addTenantDto, getByIdDto } from './dto';

@ApiTags('tenants')
@Controller('tenants')
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @Get()
  getAll() {
    return this.tenantService.getAll();
  }

  @Post()
  store(@Body() dto: addTenantDto) {
    return this.tenantService.add(dto);
  }

  @Get(':id')
  getOneOwner(@Param() dto: getByIdDto) {
    return { dto };
    return this.tenantService.delete(dto);
  }

  @Delete(':id')
  deleteOwner(@Param() dto: getByIdDto) {
    return this.tenantService.delete(dto);
  }
}
