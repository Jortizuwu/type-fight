import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { HistoryEnity } from 'src/common/domain/entities/history.entity';
import { ICreateHistoryDto } from 'src/common/domain/interface/history/dto/create-history-dto.interface';
import { IOrmHistoryRepository } from 'src/common/domain/interface/history/repository.interface';

@Injectable()
export class OrmHistoryRepository
  extends Repository<HistoryEnity>
  implements IOrmHistoryRepository
{
  constructor(dataSource: DataSource) {
    super(HistoryEnity, dataSource.createEntityManager());
  }

  async createHistory(match: ICreateHistoryDto): Promise<void> {
    const newHistory = this.create({
      owners: Object.values(match),
    });
    await this.save(newHistory);
  }
}
