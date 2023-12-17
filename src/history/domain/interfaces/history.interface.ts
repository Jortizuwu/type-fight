import { IResponse } from 'src/common/domain/interface/response';
import { CreateHistoryDto } from '../dto/create-history.dto';

export interface IUseCaseHistoryService {
  createHistory(users: CreateHistoryDto): Promise<IResponse>;
}

export interface IHistoryRepository {
  createHistory(users: CreateHistoryDto): Promise<void>;
}
