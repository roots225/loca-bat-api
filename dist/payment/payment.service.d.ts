import { PrismaService } from 'src/prisma/prisma.service';
import { addPaymentDto } from './dto';
import { integerIDDto } from 'src/dto';
export declare class PaymentService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        success: boolean;
        data: (import("@prisma/client/runtime").GetResult<{
            id: number;
            amount: import("@prisma/client/runtime").Decimal;
            status: string;
            tenant_id: number;
            property_id: number;
            start_period: Date;
            end_period: Date;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
    }>;
    add(dto: addPaymentDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            id: number;
            amount: import("@prisma/client/runtime").Decimal;
            status: string;
            tenant_id: number;
            property_id: number;
            start_period: Date;
            end_period: Date;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    }>;
    delete(dto: integerIDDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            id: number;
            amount: import("@prisma/client/runtime").Decimal;
            status: string;
            tenant_id: number;
            property_id: number;
            start_period: Date;
            end_period: Date;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    }>;
}
