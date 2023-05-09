import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { addOwnerDto, addOwnerPropertyDto } from './dto';
import { Injectable } from '@nestjs/common';
import { integerIDDto } from 'src/dto';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    try {
      const owners = await this.prisma.owner.findMany({
        skip: 0,
        take: 10,
        include: {
          user: true,
        },
      });

      return {
        success: true,
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

  async getOwnerProperties(dto: integerIDDto) {
    try {
      const owners = await this.prisma.ownerProperty.findMany({
        where: {
          owner_id: dto.id,
        },
        include: {
          owner: true,
          property: true,
        },
      });

      return {
        success: true,
        data: owners,
      };
    } catch (error) {
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

      return {
        success: true,
        data: {
          ...user,
          ...owner,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async addProperty(dto: addOwnerPropertyDto) {
    try {
      const data = await this.prisma.ownerProperty.create({
        data: {
          owner_id: dto.owner_id,
          property_id: dto.property_id,
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

  async delete(dto: integerIDDto) {
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
        success: true,
        data: owner,
      };
    } catch (error) {
      throw error;
    }
  }
}
