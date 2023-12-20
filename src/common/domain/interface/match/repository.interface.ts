import { FindOneOptions } from 'typeorm';
import { ICreateMatchDto } from './dto/create-match-dto.interface';
import { IMatchModel } from './model/match-model.interface';

export abstract class IOrmMatchRepository {
  abstract getMatch(
    id: string,
    options?: FindOneOptions<IMatchModel>,
  ): Promise<IMatchModel>;
  abstract createMatch(createMatchDto: ICreateMatchDto): Promise<void>;
  abstract finishMatch(id: string): Promise<void>;
  abstract addPlayer(uid: ICreateMatchDto): Promise<void>;
  // abstract deleteMatch(id: string): Promise<void>;
}
