import { ICreateHistoryDto } from './dto/create-history-dto.interface';

export abstract class IOrmHistoryRepository {
  abstract createHistory(users: ICreateHistoryDto): Promise<void>;
}
