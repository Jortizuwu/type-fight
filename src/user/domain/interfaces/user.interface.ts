import { IResponse } from 'src/common/domain/interface/response';
import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { CreateUserDto } from 'src/user/domain/dto/create-user.dto';

interface IUserGets {
  getAllUsers(): Promise<IUserModel[]>;
  getUser(term: string): Promise<IUserModel>;
}

export interface IUseCaseUserService extends IUserGets {
  createUser(user: CreateUserDto): Promise<IResponse>;
}

export interface IUserRepository extends IUserGets {
  createUser(user: CreateUserDto): Promise<void>;
}
