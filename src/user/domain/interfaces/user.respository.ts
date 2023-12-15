import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { CreateUserDto } from '../dto/create-user.dto';

export interface ICrudUserRepository {
  getAllUsers(): Promise<IUserModel[]>;
  getUser(uid: string): Promise<IUserModel>;
  createUser(user: CreateUserDto): Promise<void>;
}
