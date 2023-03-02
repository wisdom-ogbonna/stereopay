import { User } from 'src/typeorm/entities/User';
import { CreateUserParam, updateUserParam } from 'src/utils/types';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findUsers(): Promise<User[]>;
    creareUser(userDetails: CreateUserParam): Promise<User>;
    updateUser(id: number, updateUserDetails: updateUserParam): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
