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
  private isUUID =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  constructor(dataSource: DataSource) {
    super(UserEnity, dataSource.createEntityManager());
  }

  async getUser(term: string): Promise<IUserModel> {
    const termTypeUUID = this.isUUID.test(term);

    if (termTypeUUID) {
      return await this.findOneBy({
        uid: term,
      });
    }
    return await this.findOneBy({
      userName: term,
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
