import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';

import { CreateUserDto } from '../domain/dto/create-user.dto';
import { IResponse } from 'src/common/domain/interface/response';
import { IUseCaseUserService } from '../domain/interfaces/user.interface';
import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { UserUseCaseService } from '../application/use-case/user.use-case';
import { Role, Roles } from 'src/common/infrastructure/decorators/roles';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserUseCaseService)
    private readonly userService: IUseCaseUserService,
  ) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createUserDto: CreateUserDto): Promise<IResponse> {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @Roles(Role.Admin)
  findAll(): Promise<IUserModel[]> {
    return this.userService.getAllUsers();
  }

  @Get(':term')
  @Roles(Role.Admin)
  findOne(@Param('term') term: string): Promise<IUserModel> {
    return this.userService.getUser(term);
  }
}
