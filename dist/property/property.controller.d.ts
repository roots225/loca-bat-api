import { PropertyService } from './property.service';
import { integerIDDto } from 'src/dto';
import { addPropertyDto } from './dto';
export declare class PropertyController {
    private propertyService;
    constructor(propertyService: PropertyService);
    findAll(): Promise<{
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
    store(dto: addPropertyDto): Promise<{
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
    show(dto: integerIDDto): Promise<{
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
    remove(dto: integerIDDto): Promise<{
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
