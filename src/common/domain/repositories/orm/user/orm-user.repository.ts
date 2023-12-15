import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ICreateUserDto } from 'src/common/domain/interface/user/dto/create-user-dto.interface';
import { IOrmUserRepository } from 'src/common/domain/interface/user/repository.interface';
import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { UserEnity } from 'src/common/domain/entities/user.entity';

@Injectable()
export class OrmUserRepository
  extends Repository<UserEnity>
  implements IOrmUserRepository
{
  constructor(dataSource: DataSource) {
    super(UserEnity, dataSource.createEntityManager());
  }

  async getUser(uid: string): Promise<IUserModel> {
    return await this.findOneBy({
      uid,
    });
  }

  async getAllUsers(): Promise<IUserModel[]> {
    return await this.find();
  }
  async createUser(user: ICreateUserDto): Promise<void> {
    const newUser = this.create(user);
    await this.save(newUser);
  }
}
