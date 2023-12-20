import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './infrastucture/user.controller';
import { UserEnity } from 'src/common/domain/entities/user.entity';
import { UserUseCaseService } from './application/use-case/user.use-case';
import { OrmUserRepository } from 'src/common/domain/repositories/orm/user/orm-user.repository';
import { UserRepository } from './domain/repository/user.respository';
@Module({
  imports: [TypeOrmModule.forFeature([UserEnity])],
  providers: [UserUseCaseService, OrmUserRepository, UserRepository],
  exports: [UserRepository],
  controllers: [UserController],
})
export class UserModule {}
