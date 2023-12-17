import { ICreateMatchDto } from './dto/create-match-dto.interface';

export abstract class IOrmMatchRepository {
  abstract createMatch(users: ICreateMatchDto): Promise<void>;
}
