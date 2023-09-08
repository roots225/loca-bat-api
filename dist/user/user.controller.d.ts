import { User } from '@prisma/client';
import { UserService } from './user.service';
import { addUserDto, deleteDto } from './dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(user: User): import("@prisma/client/runtime").GetResult<{
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
}
