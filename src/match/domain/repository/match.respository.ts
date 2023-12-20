import { Inject, Injectable } from '@nestjs/common';

import { ICreateMatchDto } from 'src/common/domain/interface/match/dto/create-match-dto.interface';
import { IMatchModel } from 'src/common/domain/interface/match/model/match-model.interface';
import { IOrmMatchRepository } from 'src/common/domain/interface/match/repository.interface';
import { OrmMatchRepository } from 'src/common/domain/repositories/orm/match/orm-match.repository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class MatchRepository implements IOrmMatchRepository {
  constructor(
    @Inject(OrmMatchRepository)
    private readonly matchService: IOrmMatchRepository,
  ) {}

  async getMatch(
    id: string,
    options?: FindOneOptions<IMatchModel>,
  ): Promise<IMatchModel> {
    return await this.matchService.getMatch(id, options);
  }

  async finishMatch(id: string): Promise<void> {
    await this.matchService.finishMatch(id);
  }

  async addPlayer(createMatchDto: ICreateMatchDto): Promise<void> {
    await this.matchService.addPlayer(createMatchDto);
  }

  async createMatch(createMatchDto: ICreateMatchDto): Promise<void> {
    await this.matchService.createMatch(createMatchDto);
  }
}
