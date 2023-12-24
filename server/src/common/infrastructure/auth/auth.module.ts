import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthController } from './infrastucture/auth.controller';
import { AuthGuard } from '../guards/auth.guard';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { JwtModule } from '../jwt/jwt.module';
import { LoginUsesCases } from './application/use-case/login.use-case';
import { OrmUserRepository } from 'src/common/domain/repositories/orm/user/orm-user.repository';
import { RegisterUseCases } from './application/use-case/register.use-case';
import { UserRepository } from 'src/user/domain/repository/user.respository';
import { RolesGuard } from '../guards/role.guard';

// TODO: SOLVE import USERMODULE, NOT providers OrmUserRepository, UserRepository
@Module({
  imports: [JwtModule, BcryptModule],
  providers: [
    LoginUsesCases,
    RegisterUseCases,
    OrmUserRepository,
    UserRepository,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
