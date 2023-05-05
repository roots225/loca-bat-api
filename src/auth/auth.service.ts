import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignupDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(dto: LoginDto) {
    // Get user by email
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });

      if (!user) {
        throw new ForbiddenException('Credentials incorrect');
      }

      // Compare the password
      const pwMatches = await argon.verify(user.password, dto.password);
      if (!pwMatches) {
        throw new ForbiddenException('Credentials incorrect');
      }

      // remove password
      delete user.password;

      return {
        user,
        ...(await this.signToken(user.id, user.email)),
      };
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }

  async signup(dto: SignupDto) {
    try {
      // Generate the password
      const hash = await argon.hash(dto.password);

      // Save the user
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          role: dto.role,
          password: hash,
        },
      });

      // remove password
      delete user.password;

      //return the user and token
      return {
        user,
        ...(await this.signToken(user.id, user.email)),
      };
    } catch (error) {
      console.log(error);
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('Credentials taken');
      }
      throw error;
    }
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      secret,
      expiresIn: '5m',
    });

    return {
      access_token: token,
    };
  }
}
