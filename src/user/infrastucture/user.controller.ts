import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateUserDto } from '../domain/dto/create-user.dto';

import { UserUseCaseService } from '../application/use-case/user.use-case';
import {
  IResponse,
  IUseCaseUserService,
} from '../domain/interfaces/user.use-case';
import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';

@Controller('users')
export class UserController {
  constructor(
    @Inject(UserUseCaseService)
    private readonly userService: IUseCaseUserService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<IResponse> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll(): Promise<IUserModel[]> {
    return this.userService.getAllUsers();
  }

  @Get(':uid')
  findOne(@Param('id') uid: string): Promise<IUserModel> {
    return this.userService.getUser(uid);
  }
}
