import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { addOwnerDto, getByIdDto } from './dto';

export class OwnerService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const owners = await this.prisma.owner.findMany({
        skip: 0,
        take: 10,
      });

      return {
        data: owners,
      };
    } catch (error) {
      console.log(error);
      return {
        error,
        message: error.message,
      };
      throw error;
    }
  }

  async add(dto: addOwnerDto) {
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
      const owner = await this.prisma.owner.create({
        data: {
          agency_id: dto.agency_id,
          user_id: user.id,
        },
      });

      return { data: owner };
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
      const owner = await this.prisma.owner.delete({
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
        data: owner,
      };
    } catch (error) {
      throw error;
    }
  }
}
