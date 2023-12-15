import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { CreateUserDto } from 'src/user/domain/dto/create-user.dto';

export interface IUseCaseUserService {
  getAllUsers(): Promise<IUserModel[]>;
  getUser(uid: string): Promise<IUserModel>;
  createUser(user: CreateUserDto): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
