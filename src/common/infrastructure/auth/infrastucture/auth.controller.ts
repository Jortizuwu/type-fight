import { Controller, Post, Body, Inject } from '@nestjs/common';

import { LoginUsesCases } from '../application/use-case/login.use-case';
import {
  SignInResponse,
  IUseCaseLoginService,
} from '../domain/interfaces/login-use-case.interface';
import { SignInDto } from '../domain/dto/login.dto';
import { Public } from '../../decorators/public';
import { IUseCaseRegisterService } from '../domain/interfaces/register-use-case.interface';
import { SignUpDto } from '../domain/dto/register.dto';
import { RegisterUseCases } from '../application/use-case/register.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(LoginUsesCases)
    private readonly loginServices: IUseCaseLoginService,
    @Inject(RegisterUseCases)
    private readonly registerServices: IUseCaseRegisterService,
  ) {}

  @Public()
  @Post('signIn')
  signIn(@Body() signInDto: SignInDto): Promise<SignInResponse> {
    return this.loginServices.signIn(signInDto);
  }

  @Public()
  @Post('signUp')
  signUp(@Body() signUpDto: SignUpDto): Promise<SignInResponse> {
    return this.registerServices.signUp(signUpDto);
  }
}
