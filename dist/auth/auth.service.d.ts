import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from './user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    registerUser(userDto: CreateUserDto): Promise<import("./entities/user.entity").UserEntity>;
    private validateUser;
    login(loginDto: LoginDto): Promise<{
        message: string;
    }>;
}
