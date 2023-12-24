import { Inject, Injectable } from '@nestjs/common';

import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { OrmUserRepository } from 'src/common/domain/repositories/orm/user/orm-user.repository';

import { CreateUserDto } from 'src/user/domain/dto/create-user.dto';
import { IOrmUserRepository } from 'src/common/domain/interface/user/repository.interface';
import { IUserRepository } from '../interfaces/user.interface';

@Injectable()
export class UserRepository implements IOrmUserRepository {
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

  async createUser(user: CreateUserDto): Promise<void> {
    await this.userRepository.createUser(user);
  }
}
