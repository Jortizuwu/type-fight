import { Controller, Post, Body, Inject } from '@nestjs/common';

import { IResponse } from 'src/common/domain/interface/response';
import { IUseCaseMatchService } from '../domain/interfaces/match.interface';
import { MatchUseCaseService } from '../application/use-case/match.use-case';
import { CreateMatchDto } from '../domain/dto/create-match.dto';

@Controller('match')
export class MatchController {
  constructor(
    @Inject(MatchUseCaseService)
    private readonly matchService: IUseCaseMatchService,
  ) {}

  @Post()
  create(@Body() createMatchDto: CreateMatchDto): Promise<IResponse> {
    return this.matchService.createMatch(createMatchDto);
  }
}
