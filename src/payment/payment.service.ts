import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { addPaymentDto } from './dto';
import { integerIDDto } from 'src/dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const data = await this.prisma.payment.findMany();
      return {
        success: true,
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  async add(dto: addPaymentDto) {
    try {
      const data = await this.prisma.payment.create({
        data: dto,
      });
      return {
        success: true,
        data,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(dto: integerIDDto) {
    try {
      const data = await this.prisma.payment.delete({
        where: {
          id: dto.id,
        },
      });
      return {
        success: true,
        data,
      };
    } catch (error) {
      throw error;
    }
  }
}
