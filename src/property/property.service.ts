import { PrismaService } from 'src/prisma/prisma.service';
import { addPropertyDto } from './dto';
import { Injectable } from '@nestjs/common';
import { integerIDDto } from 'src/dto';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const items = await this.prisma.property.findMany({
        skip: 0,
        take: 10,
      });

      return {
        success: true,
        data: items,
      };
    } catch (error) {
      throw error;
    }
  }

  async getByID(dto: integerIDDto) {
    try {
      const property = await this.prisma.property.findFirst({
        where: {
          id: dto.id,
        },
      });

      return {
        success: true,
        data: property,
      };
    } catch (error) {
      throw error;
    }
  }

  async add(dto: addPropertyDto) {
    try {
      const property = await this.prisma.property.create({
        data: dto,
      });

      return {
        success: true,
        data: property,
      };
    } catch (error) {
      throw error;
    }
  }

  async delete(dto: integerIDDto) {
    try {
      const property = await this.prisma.property.delete({
        where: {
          id: dto.id,
        },
      });

      return {
        success: true,
        data: property,
      };
    } catch (error) {
      throw error;
    }
  }
}
