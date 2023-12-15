import { Inject, Injectable } from '@nestjs/common';

import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { OrmUserRepository } from 'src/common/domain/repositories/orm/user/orm-user.repository';

import {
  IResponse,
  IUseCaseUserService,
} from 'src/user/domain/interfaces/user.use-case';
import { ICrudUserRepository } from 'src/user/domain/interfaces/user.respository';
import { CreateUserDto } from 'src/user/domain/dto/create-user.dto';

@Injectable()
export class UserUseCaseService implements IUseCaseUserService {
  constructor(
    @Inject(OrmUserRepository)
    private readonly userRepository: ICrudUserRepository,
  ) {}

  async getAllUsers(): Promise<IUserModel[]> {
    return await this.userRepository.getAllUsers();
  }
  async getUser(uid: string): Promise<IUserModel> {
    return await this.userRepository.getUser(uid);
  }
  async createUser(user: CreateUserDto): Promise<IResponse> {
    await this.userRepository.createUser(user);
    return {
      code: 200,
      message: 'success',
    };
  }
}
