import { Inject, Injectable } from '@nestjs/common';

import { ICreateHistoryDto } from 'src/common/domain/interface/history/dto/create-history-dto.interface';
import { IHistoryRepository } from '../interfaces/history.interface';
import { IOrmHistoryRepository } from 'src/common/domain/interface/history/repository.interface';
import { OrmHistoryRepository } from 'src/common/domain/repositories/orm/history/orm-history.repository';

@Injectable()
export class HistoryRepository implements IOrmHistoryRepository {
  constructor(
    @Inject(OrmHistoryRepository)
    private readonly historyService: IHistoryRepository,
  ) {}

  async createHistory(users: ICreateHistoryDto): Promise<void> {
    await this.historyService.createHistory(users);
  }
}
