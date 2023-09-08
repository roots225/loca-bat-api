import { PrismaService } from 'src/prisma/prisma.service';
import { addUserDto, changePasswordDto, deleteDto } from './dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    add(dto: addUserDto): Promise<{
        user: import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {};
    }>;
    update(dto: addUserDto): Promise<{
        user: import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {};
    }>;
    delete(dto: deleteDto): Promise<{
        user: import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {};
    }>;
    changePassword(dto: changePasswordDto): Promise<{
        user: import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {};
    }>;
}
