import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import {
  IJwtService,
  IJwtServicePayload,
} from 'src/common/domain/interface/jwt/jwt.interface';

@Injectable()
export class JwtTokenService implements IJwtService {
  constructor(private readonly jwtService: JwtService) {}

  async checkToken(token: string): Promise<void> {
    const decode = await this.jwtService.verifyAsync(token);
    return decode;
  }

  async createToken(payload: IJwtServicePayload): Promise<string> {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}
