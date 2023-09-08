import { PrismaService } from 'src/prisma/prisma.service';
import { addOwnerDto, addOwnerPropertyDto } from './dto';
import { integerIDDto } from 'src/dto';
export declare class OwnerService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        success: boolean;
        data: ({
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
        } & import("@prisma/client/runtime").GetResult<{
            user_id: number;
            agency_id: number;
        }, unknown, never> & {})[];
        error?: undefined;
        message?: undefined;
    } | {
        error: any;
        message: any;
        success?: undefined;
        data?: undefined;
    }>;
    getOwnerProperties(dto: integerIDDto): Promise<{
        success: boolean;
        data: ({
            owner: import("@prisma/client/runtime").GetResult<{
                user_id: number;
                agency_id: number;
            }, unknown, never> & {};
            property: import("@prisma/client/runtime").GetResult<{
                id: number;
                name: string;
                type: string;
                description: string;
                owner_id: number;
                tenant_id: number;
                monthly_cost: import("@prisma/client/runtime").Decimal;
                rent_deposit: number;
                rent_advance: number;
                day_of_rent: string;
                address: string;
                photo: string;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {};
        } & import("@prisma/client/runtime").GetResult<{
            id: number;
            owner_id: number;
            property_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
    }>;
    add(dto: addOwnerDto): Promise<{
        success: boolean;
        data: {
            user_id: number;
            agency_id: number;
            email: string;
            password: string;
            role: string;
            id: number;
            firstname: string;
            lastname: string;
            phone: string;
            address: string;
            avatar: string;
            created_at: Date;
            updated_at: Date;
        };
    }>;
    addProperty(dto: addOwnerPropertyDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            id: number;
            owner_id: number;
            property_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    }>;
    delete(dto: integerIDDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            user_id: number;
            agency_id: number;
        }, unknown, never> & {};
    }>;
}
