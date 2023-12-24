import { IResponse } from 'src/common/domain/interface/response';
import { SignUpDto } from '../dto/register.dto';

export interface SignUpResponse extends IResponse {
  token: string;
}

export interface IUseCaseRegisterService {
  signUp(singUnDto: SignUpDto): Promise<SignUpResponse>;
}
