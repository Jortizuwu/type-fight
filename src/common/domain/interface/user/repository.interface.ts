import { ICreateUserDto } from './dto/create-user-dto.interface';
import { IUserModel } from './model/user-model.interface';

export abstract class IOrmUserRepository {
  abstract getAllUsers(): Promise<IUserModel[]>;
  abstract getUser(uid: string): Promise<IUserModel>;
  abstract createUser(user: ICreateUserDto): Promise<void>;
  // abstract updateUser(uid: string, user: ICreateUserDto): Promise<void>;
  // abstract deleteUser(uid: string): Promise<void>;
}
