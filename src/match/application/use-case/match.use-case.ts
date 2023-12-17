import { Inject, Injectable } from '@nestjs/common';
import { IResponse } from 'src/common/domain/interface/response';

import { OrmMatchRepository } from 'src/common/domain/repositories/orm/match/orm-match.repository';
import { CreateMatchDto } from 'src/match/domain/dto/create-match.dto';
import {
  IMatchRepository,
  IUseCaseMatchService,
} from 'src/match/domain/interfaces/match.interface';

@Injectable()
export class MatchUseCaseService implements IUseCaseMatchService {
  constructor(
    @Inject(OrmMatchRepository)
    private readonly matchRepository: IMatchRepository,
  ) {}

  async createMatch(user: CreateMatchDto): Promise<IResponse> {
    await this.matchRepository.createMatch(user);
    return {
      code: 200,
      message: 'success',
    };
  }
}
