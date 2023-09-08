import { PrismaService } from 'src/prisma/prisma.service';
import { addTenantDto, addTenantPropertyDto, getByIdDto, processPaymentDto } from './dto';
export declare class TenantService {
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
        prisma?: undefined;
    } | {
        error: any;
        message: any;
        prisma: string;
        success?: undefined;
        data?: undefined;
    }>;
    add(dto: addTenantDto): Promise<{
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
        error?: undefined;
        message?: undefined;
    } | {
        error: any;
        message: any;
        success?: undefined;
        data?: undefined;
    }>;
    addProperty(dto: addTenantPropertyDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            id: number;
            tenant_id: number;
            property_id: number;
            enter_date: Date;
            leave_date: Date;
            created_at: Date;
            updated_at: Date;
        }, unknown, never> & {};
    }>;
    getTenantProperties(dto: getByIdDto): Promise<{
        success: boolean;
        data: ({
            properties: (import("@prisma/client/runtime").GetResult<{
                id: number;
                tenant_id: number;
                property_id: number;
                enter_date: Date;
                leave_date: Date;
                created_at: Date;
                updated_at: Date;
            }, unknown, never> & {})[];
        } & import("@prisma/client/runtime").GetResult<{
            user_id: number;
            agency_id: number;
        }, unknown, never> & {})[];
    }>;
    getPayments(dto: getByIdDto): Promise<{
        success: boolean;
        data: ({
            transactions: (import("@prisma/client/runtime").GetResult<{
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
        } & import("@prisma/client/runtime").GetResult<{
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
    processPayment(dto: processPaymentDto): Promise<{
        success: boolean;
        data: {
            payment: import("@prisma/client/runtime").GetResult<{
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
            transaction: import("@prisma/client/runtime").GetResult<{
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
        };
    }>;
    delete(dto: getByIdDto): Promise<{
        success: boolean;
        data: import("@prisma/client/runtime").GetResult<{
            user_id: number;
            agency_id: number;
        }, unknown, never> & {};
    }>;
}
