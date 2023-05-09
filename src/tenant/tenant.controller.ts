import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  addTenantDto,
  addTenantPropertyDto,
  getByIdDto,
  processPaymentDto,
} from './dto';
import { JwtGuard } from 'src/auth/guard';

@ApiBearerAuth()
@UseGuards(JwtGuard)
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

  @Get(':id/properties')
  getTenantProperties(@Param() dto: getByIdDto) {
    return this.tenantService.getTenantProperties(dto);
  }

  @Get(':id/payments')
  getPayments(@Param() dto: getByIdDto) {
    return this.tenantService.getPayments(dto);
  }

  @Post('process-payment')
  processPayment(@Body() dto: processPaymentDto) {
    return this.tenantService.processPayment(dto);
  }

  @Post(':id/property')
  storeTenantProperty(@Body() dto: addTenantPropertyDto) {
    return this.tenantService.addProperty(dto);
  }

  @Delete(':id')
  deleteOwner(@Param() dto: getByIdDto) {
    return this.tenantService.delete(dto);
  }
}
