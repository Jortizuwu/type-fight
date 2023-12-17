import { Inject, Injectable } from '@nestjs/common';

import { IMatchRepository } from '../interfaces/match.interface';
import { IOrmMatchRepository } from 'src/common/domain/interface/match/repository.interface';
import { OrmMatchRepository } from 'src/common/domain/repositories/orm/match/orm-match.repository';
import { ICreateMatchDto } from 'src/common/domain/interface/match/dto/create-match-dto.interface';

@Injectable()
export class MatchRepository implements IOrmMatchRepository {
  constructor(
    @Inject(OrmMatchRepository)
    private readonly userRepository: IMatchRepository,
  ) {}

  async createMatch(users: ICreateMatchDto): Promise<void> {
    await this.userRepository.createMatch(users);
  }
}
