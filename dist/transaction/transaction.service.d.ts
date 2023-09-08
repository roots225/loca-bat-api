import { integerIDDto } from 'src/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { addTransactionDto } from './dto';
export declare class TransactionService {
    private prisma;
    constructor(prisma: PrismaService);
    getOne(dto: integerIDDto): Promise<{
        success: boolean;
        data: (import("@prisma/client/runtime").GetResult<{
            id: number;
            amount: import("@prisma/client/runtime").Decimal;
            status: string;
            type: string;
            property_id: number;
            start_period: Date;
            end_period: Date;
            payment_method: string;
            payment_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {})[];
    }>;
    add(dto: addTransactionDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            id: number;
            amount: import("@prisma/client/runtime").Decimal;
            status: string;
            type: string;
            property_id: number;
            start_period: Date;
            end_period: Date;
            payment_method: string;
            payment_id: number;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    }>;
}
