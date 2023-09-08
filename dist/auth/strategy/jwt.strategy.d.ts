import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService, config: ConfigService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        role: string;
        phone: string;
        address: string;
        avatar: string;
        created_at: Date;
        updated_at: Date;
    }, unknown, never> & {}>;
}
export {};
