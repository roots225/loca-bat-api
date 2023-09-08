import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: SignupDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
    signin(dto: LoginDto): Promise<{
        code: number;
        status: string;
        message: string;
        data: any;
    }>;
}
