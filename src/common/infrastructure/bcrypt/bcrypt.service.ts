import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { IBcryptService } from '../../domain/interface/bcrypt/bcrypt.interface';

@Injectable()
export class BcryptService implements IBcryptService {
  private saltOrRounds = 10;

  async hash(hashString: string): Promise<string> {
    return await bcrypt.hash(hashString, this.saltOrRounds);
  }

  async compare(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }
}
