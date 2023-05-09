import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { addPaymentDto } from './dto';
import { integerIDDto } from 'src/dto';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@ApiTags('payments')
@Controller('payments')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Get()
  findAll() {
    return this.paymentService.getAll();
  }

  @Post()
  store(@Body() dto: addPaymentDto) {
    return this.paymentService.add(dto);
  }

  @Delete(':id')
  remove(@Param() dto: integerIDDto) {
    return this.paymentService.delete(dto);
  }
}
