import { AgencyService } from './agency.service';
import { addAgencyDto, deleteAgencyDto, getOneAgencyDto } from './dto/agency.dto';
export declare class AgencyController {
    private agencyService;
    constructor(agencyService: AgencyService);
    getAgencies(): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    } | {
        data: any[];
    }>;
    show(dto: getOneAgencyDto): Promise<{
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
