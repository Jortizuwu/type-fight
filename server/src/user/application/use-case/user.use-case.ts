import { Inject, Injectable } from '@nestjs/common';
import { IResponse } from 'src/common/domain/interface/response';

import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { OrmUserRepository } from 'src/common/domain/repositories/orm/user/orm-user.repository';

import { CreateUserDto } from 'src/user/domain/dto/create-user.dto';
import {
  IUseCaseUserService,
  IUserRepository,
} from 'src/user/domain/interfaces/user.interface';

@Injectable()
export class UserUseCaseService implements IUseCaseUserService {
  constructor(
    @Inject(OrmUserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async getAllUsers(): Promise<IUserModel[]> {
    return await this.userRepository.getAllUsers();
  }
  async getUser(term: string): Promise<IUserModel> {
    return await this.userRepository.getUser(term);
  }

  async createUser(user: CreateUserDto): Promise<IResponse> {
    await this.userRepository.createUser(user);
    return {
      code: 200,
      message: 'success',
    };
  }
}
