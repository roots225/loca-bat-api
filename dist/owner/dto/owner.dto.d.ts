import { addUserDto } from 'src/user/dto';
export declare class addOwnerDto extends addUserDto {
    role: string;
    phone: string;
    agency_id: number;
}
export declare class addOwnerPropertyDto {
    owner_id: number;
    property_id: number;
}
