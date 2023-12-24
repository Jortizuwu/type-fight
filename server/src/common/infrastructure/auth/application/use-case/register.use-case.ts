import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  IUseCaseRegisterService,
  SignUpResponse,
} from '../../domain/interfaces/register-use-case.interface';
import { SignUpDto } from '../../domain/dto/register.dto';
import { UserRepository } from 'src/user/domain/repository/user.respository';
import { JwtTokenService } from 'src/common/infrastructure/jwt/jwt.service';
import { BcryptService } from 'src/common/infrastructure/bcrypt/bcrypt.service';
import { IJwtService } from 'src/common/domain/interface/jwt/jwt.interface';
import { IBcryptService } from 'src/common/domain/interface/bcrypt/bcrypt.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RegisterUseCases implements IUseCaseRegisterService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
    @Inject(JwtTokenService)
    private readonly jwtTokenService: IJwtService,
    @Inject(BcryptService)
    private readonly bcryptService: IBcryptService,
    private readonly configService: ConfigService,
  ) {}

  async signUp(singUpDto: SignUpDto): Promise<SignUpResponse> {
    const existUser = await this.userRepository.getUser(singUpDto.userName);
    if (existUser)
      throw new BadRequestException(
        `The user name ${singUpDto.userName} already exist, try another user name`,
      );

    const hashPassword = await this.bcryptService.hash(singUpDto.password);
    await this.userRepository.createUser({
      password: hashPassword,
      userName: singUpDto.userName,
    });

    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_EXPIRATION_TIME');
    const token = await this.jwtTokenService.createToken(
      {
        userName: singUpDto.userName,
        role: existUser.role,
        uid: existUser.uid,
      },
      secret,
      expiresIn,
    );

    return {
      code: 200,
      message: 'success',
      token: token,
    };
  }
}
