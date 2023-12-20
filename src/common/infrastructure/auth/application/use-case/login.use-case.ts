import { ConfigService } from '@nestjs/config';
import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { BcryptService } from 'src/common/infrastructure/bcrypt/bcrypt.service';
import { IJwtService } from 'src/common/domain/interface/jwt/jwt.interface';
import {
  SignInResponse,
  IUseCaseLoginService,
} from '../../domain/interfaces/login-use-case.interface';

import { IBcryptService } from 'src/common/domain/interface/bcrypt/bcrypt.interface';
import { JwtTokenService } from 'src/common/infrastructure/jwt/jwt.service';
import { UserRepository } from 'src/user/domain/repository/user.respository';
import { SignInDto } from '../../domain/dto/login.dto';

@Injectable()
export class LoginUsesCases implements IUseCaseLoginService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
    @Inject(JwtTokenService)
    private readonly jwtTokenService: IJwtService,
    @Inject(BcryptService)
    private readonly bcryptService: IBcryptService,
    private readonly configService: ConfigService,
  ) {}

  async signIn(singInDto: SignInDto): Promise<SignInResponse> {
    const user = await this.userRepository.getUser(singInDto.userName);

    if (!user) throw new NotFoundException('user not found');
    const isSamePassword = await this.bcryptService.compare(
      singInDto.password,
      user.password,
    );

    if (!isSamePassword) throw new UnauthorizedException('incorrect password');

    const { userName, role } = user;

    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<string>('JWT_EXPIRATION_TIME');

    const token = await this.jwtTokenService.createToken(
      {
        userName,
        role,
        uid: user.uid,
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
