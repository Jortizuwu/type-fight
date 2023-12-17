import { Controller, Post, Body, Inject } from '@nestjs/common';

import { CreateHistoryDto } from '../domain/dto/create-history.dto';
import { HistoryUseCaseService } from '../application/use-case/history.use-case';
import { IResponse } from 'src/common/domain/interface/response';
import { IUseCaseHistoryService } from '../domain/interfaces/history.interface';

@Controller('history')
export class HistoryController {
  constructor(
    @Inject(HistoryUseCaseService)
    private readonly historyService: IUseCaseHistoryService,
  ) {}

  @Post()
  create(@Body() createMatchDto: CreateHistoryDto): Promise<IResponse> {
    return this.historyService.createHistory(createMatchDto);
  }
}
