import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignupDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login(dto: LoginDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    signup(dto: SignupDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
