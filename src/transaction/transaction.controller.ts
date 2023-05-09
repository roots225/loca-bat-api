import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { integerIDDto } from 'src/dto';
import { TransactionService } from './transaction.service';
import { addTransactionDto } from './dto';

@ApiBearerAuth()
@UseGuards(JwtGuard)
@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  findOne(@Param() dto: integerIDDto) {
    return this.transactionService.getOne(dto);
  }

  @Post()
  store(@Body() dto: addTransactionDto) {
    return this.transactionService.add(dto);
  }
}
