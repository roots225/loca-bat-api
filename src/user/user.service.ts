import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { addUserDto, changePasswordDto, deleteDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async add(dto: addUserDto) {
    try {
      /// Generate password hash
      const hash = await argon.hash(dto.password);

      /// Save user to database
      const user = await this.prisma.user.create({
        data: {
          lastname: dto.lastname,
          firstname: dto.firstname,
          email: dto.email,
          role: dto.role,
          password: hash,
        },
      });

      return { user };
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError ||
        error.code == 'P2002'
      ) {
        throw new ForbiddenException('Account already exist');
      }
      throw error;
    }
  }

  async update(dto: addUserDto) {
    /// Generate password hash
    const hash = await argon.hash(dto.password);

    /// Save user to database
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        role: dto.role,
        password: hash,
      },
    });

    return { user };
  }

  async delete(dto: deleteDto) {
    try {
      /// Save user to database
      const user = await this.prisma.user.delete({
        where: {
          id: dto.id,
        },
      });

      return { user };
    } catch (error) {
      throw new ForbiddenException('failed to delete user');
    }
  }

  async changePassword(dto: changePasswordDto) {
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: {
          id: dto.user_id,
        },
      });

      if (!user) {
        throw new ForbiddenException('Aucun utilisateur trouvé.');
      }

      // Compare the password
      const pwMatches = await argon.verify(user.password, dto.password);
      if (!pwMatches) {
        throw new ForbiddenException('Credentials incorrect');
      }

      /// Generate new password hash
      const hash = await argon.hash(dto.new_password);

      const newUser = await this.prisma.user.update({
        where: {
          id: dto.user_id,
        },
        data: {
          password: hash,
        },
      });

      return { user: newUser };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2025') {
          throw new ForbiddenException('User not found');
        }
      }
      throw new InternalServerErrorException('Serveur indisponible');
    }
  }
}
