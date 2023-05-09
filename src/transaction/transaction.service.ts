import { Injectable } from '@nestjs/common';
import { integerIDDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { addTransactionDto } from './dto';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async getOne(dto: integerIDDto) {
    try {
      const data = await this.prisma.transaction.findMany({
        where: {
          id: dto.id,
        },
      });

      return {
        success: true,
        data,
      };
    } catch (error) {}
  }

  async add(dto: addTransactionDto) {
    try {
      const data = await this.prisma.transaction.create({
        data: dto,
      });

      return {
        success: true,
        data,
      };
    } catch (error) {}
  }
}
