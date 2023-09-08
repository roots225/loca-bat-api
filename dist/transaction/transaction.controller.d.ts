import { integerIDDto } from 'src/dto';
import { TransactionService } from './transaction.service';
import { addTransactionDto } from './dto';
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    findOne(dto: integerIDDto): Promise<{
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
    store(dto: addTransactionDto): Promise<{
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
