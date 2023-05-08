import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { addTenantDto, getByIdDto } from './dto';

export class TenantService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const items = await this.prisma.tenant.findMany({
        skip: 0,
        take: 10,
      });

      return {
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
          role: 'owner',
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

      return { data: tenant };
    } catch (error) {
      return {
        error,
        message: error.message,
      };
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
        data: tenant,
      };
    } catch (error) {
      throw error;
    }
  }
}
