import { addUserDto } from 'src/user/dto';
export declare class addTenantDto extends addUserDto {
    role: string;
    phone: string;
    agency_id: number;
}
export declare class getByIdDto {
    id: number;
}
export declare class addTenantPropertyDto {
    tenant_id: number;
    property_id: number;
    enter_date: string;
    leave_date: string;
}
export declare class processPaymentDto {
    property_id: number;
    payment_id: number;
}
