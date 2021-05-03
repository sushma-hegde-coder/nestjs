import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        message: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").UserEntity>;
}
