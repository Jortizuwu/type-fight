import { Injectable } from '@nestjs/common';
import { MatchEnity } from 'src/common/domain/entities/match.entity';
import { ICreateMatchDto } from 'src/common/domain/interface/match/dto/create-match-dto.interface';
import { IMatchModel } from 'src/common/domain/interface/match/model/match-model.interface';
import { IOrmMatchRepository } from 'src/common/domain/interface/match/repository.interface';
import { DataSource, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class OrmMatchRepository
  extends Repository<MatchEnity>
  implements IOrmMatchRepository
{
  constructor(dataSource: DataSource) {
    super(MatchEnity, dataSource.createEntityManager());
  }

  async getMatch(
    id: string,
    options?: FindOneOptions<MatchEnity>,
  ): Promise<IMatchModel> {
    return await this.findOne({
      where: {
        id,
      },
      ...options,
    });
  }

  async createMatch({ id, player }: ICreateMatchDto): Promise<void> {
    const newMatch = this.create({
      id,
      players: [player],
    });
    await this.save(newMatch);
  }

  async addPlayer({ id, player }: ICreateMatchDto): Promise<void> {
    const match = await this.getMatch(id, {
      relations: ['players'],
    });

    if (!match) {
      return null;
    }

    match.players.push(player);
    match.status = 'start';
    await this.save(match);
  }

  async finishMatch(id: string): Promise<void> {
    const match = await this.getMatch(id);

    if (match && match.isActive === true) {
      this.update(
        {
          id,
        },
        {
          isActive: false,
          status: 'finish',
          finishdate: new Date().toISOString(),
        },
      );
    }
  }
}
