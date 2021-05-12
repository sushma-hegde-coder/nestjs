import { UserEntity } from 'src/auth/entities/user.entity';
export declare class Address {
    id: number;
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: number;
    createdAt: string;
    user: UserEntity;
}
