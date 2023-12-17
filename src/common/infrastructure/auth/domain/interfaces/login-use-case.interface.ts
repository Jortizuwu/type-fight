import { IResponse } from 'src/common/domain/interface/response';
import { SignInDto } from '../dto/login.dto';

export interface SignInResponse extends IResponse {
  token: string;
}

export interface IUseCaseLoginService {
  signIn(singInDto: SignInDto): Promise<SignInResponse>;
}
