import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../../../typeorm/entities/User").User[]>;
    createUser(createUserDto: CreateUserDto): Promise<import("../../../typeorm/entities/User").User>;
    updateUserById(id: number, UpdateUserDto: UpdateUserDto): Promise<void>;
    deleteUserById(id: number): Promise<void>;
}
