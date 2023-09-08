import { PrismaService } from 'src/prisma/prisma.service';
import { addAgencyDto, deleteAgencyDto, getOneAgencyDto } from './dto/agency.dto';
export declare class AgencyService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    } | {
        data: any[];
    }>;
    get(dto: getOneAgencyDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    store(dto: addAgencyDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    delete(dto: deleteAgencyDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
}
