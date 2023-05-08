import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  addAgencyDto,
  deleteAgencyDto,
  getOneAgencyDto,
} from './dto/agency.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AgencyService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const agencies = await this.prisma.agency.findMany({
        skip: 0,
        take: 10,
      });

      return {
        data: agencies,
      };
    } catch (error) {}
    return {
      data: [],
    };
  }

  async get(dto: getOneAgencyDto) {
    try {
      const agency = await this.prisma.agency.findFirst({
        where: {
          id: dto.id,
        },
      });

      return {
        data: agency,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new NotFoundException('agency not found');
      }

      throw error;
    }
  }

  async store(dto: addAgencyDto) {
    try {
      const agency = await this.prisma.agency.create({
        data: dto,
      });

      return { data: agency };
    } catch (error) {
      throw new ServiceUnavailableException(error.message);
    }
  }

  async delete(dto: deleteAgencyDto) {
    try {
      const agency = await this.prisma.agency.delete({
        where: {
          id: dto.id,
        },
      });

      return { data: agency };
    } catch (error) {
      throw new ServiceUnavailableException(error.message);
    }
  }
}
