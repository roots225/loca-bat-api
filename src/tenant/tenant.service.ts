import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import {
  addTenantDto,
  addTenantPropertyDto,
  getByIdDto,
  processPaymentDto,
} from './dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const items = await this.prisma.tenant.findMany({
        skip: 0,
        take: 10,
        include: {
          user: true,
        },
      });

      return {
        success: true,
        data: items,
      };
    } catch (error) {
      return {
        error,
        message: error.message,
        prisma: JSON.stringify(this.prisma),
      };
      throw error;
    }
  }

  async add(dto: addTenantDto) {
    try {
      const hash = await argon.hash(dto.password);

      const user = await this.prisma.user.create({
        data: {
          firstname: dto.firstname,
          lastname: dto.lastname,
          email: dto.email,
          role: 'tenant',
          phone: dto.phone,
          password: hash,
        },
      });
      const tenant = await this.prisma.tenant.create({
        data: {
          agency_id: dto.agency_id,
          user_id: user.id,
        },
      });

      return {
        success: true,
        data: {
          ...user,
          ...tenant,
        },
      };
    } catch (error) {
      return {
        error,
        message: error.message,
      };
      throw error;
    }
  }

  async addProperty(dto: addTenantPropertyDto) {
    try {
      const data = await this.prisma.tenantProperty.create({
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

  async getTenantProperties(dto: getByIdDto) {
    try {
      const tenant = await this.prisma.tenant.findMany({
        where: {
          user_id: dto.id,
        },
        include: {
          properties: true,
        },
      });

      return {
        success: true,
        data: tenant,
      };
    } catch (error) {
      throw error;
    }
  }

  async getPayments(dto: getByIdDto) {
    try {
      const tenant = await this.prisma.payment.findMany({
        where: {
          tenant_id: dto.id,
        },
        include: {
          transactions: true,
        },
      });

      return {
        success: true,
        data: tenant,
      };
    } catch (error) {
      throw error;
    }
  }

  async processPayment(dto: processPaymentDto) {
    try {
      const trx = {
        amount: 100000,
        status: 'CREATED',
        type: 'CREDIT',

        property_id: dto.property_id,

        start_period: '',
        end_period: '',

        payment_method: 'OM',

        payment_id: dto.payment_id,
      };

      const transaction = await this.prisma.transaction.create({
        data: trx,
      });

      const payment = await this.prisma.payment.update({
        where: {
          id: dto.payment_id,
        },
        data: {
          status: 'PAID',
        },
      });

      return {
        success: true,
        data: { payment, transaction },
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(dto: getByIdDto) {
    try {
      const tenant = await this.prisma.tenant.delete({
        where: {
          user_id: dto.id,
        },
      });

      await this.prisma.user.delete({
        where: {
          id: dto.id,
        },
      });

      return {
        success: true,
        data: tenant,
      };
    } catch (error) {
      throw error;
    }
  }
}
