import { PrismaService } from 'src/prisma/prisma.service';
import { addPropertyDto } from './dto';
import { integerIDDto } from 'src/dto';
export declare class PropertyService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        success: boolean;
        data: (import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {})[];
    }>;
    getByID(dto: integerIDDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
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
    }>;
    add(dto: addPropertyDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
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
    }>;
    delete(dto: integerIDDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
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
    }>;
}
