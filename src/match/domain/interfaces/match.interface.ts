import { IResponse } from 'src/common/domain/interface/response';
import { CreateMatchDto } from 'src/match/domain/dto/create-match.dto';

export interface IUseCaseMatchService {
  createMatch(match: CreateMatchDto): Promise<IResponse>;
}

export interface IMatchRepository {
  createMatch(match: CreateMatchDto): Promise<void>;
}
