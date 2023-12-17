import { Inject, Injectable } from '@nestjs/common';
import { IOrmHistoryRepository } from 'src/common/domain/interface/history/repository.interface';
import { IResponse } from 'src/common/domain/interface/response';
import { OrmHistoryRepository } from 'src/common/domain/repositories/orm/history/orm-history.repository';
import { CreateHistoryDto } from 'src/history/domain/dto/create-history.dto';
import { IUseCaseHistoryService } from 'src/history/domain/interfaces/history.interface';

@Injectable()
export class HistoryUseCaseService implements IUseCaseHistoryService {
  constructor(
    @Inject(OrmHistoryRepository)
    private readonly historyRepository: IOrmHistoryRepository,
  ) {}

  async createHistory(user: CreateHistoryDto): Promise<IResponse> {
    await this.historyRepository.createHistory(user);
    return {
      code: 200,
      message: 'success',
    };
  }
}
