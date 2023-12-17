import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { MatchEnity } from 'src/common/domain/entities/match.entity';
import { IOrmMatchRepository } from 'src/common/domain/interface/match/repository.interface';
import { ICreateMatchDto } from 'src/common/domain/interface/match/dto/create-match-dto.interface';

@Injectable()
export class OrmMatchRepository
  extends Repository<MatchEnity>
  implements IOrmMatchRepository
{
  constructor(dataSource: DataSource) {
    super(MatchEnity, dataSource.createEntityManager());
  }

  async createMatch(match: ICreateMatchDto): Promise<void> {
    const newMatch = this.create({
      owners: Object.values(match),
    });
    await this.save(newMatch);
  }
}
