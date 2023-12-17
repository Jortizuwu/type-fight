import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MatchController } from './infrastucture/match.controller';
import { MatchUseCaseService } from './application/use-case/match.use-case';
import { MatchEnity } from 'src/common/domain/entities/match.entity';
import { OrmMatchRepository } from 'src/common/domain/repositories/orm/match/orm-match.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MatchEnity])],
  providers: [MatchController, MatchUseCaseService, OrmMatchRepository],
  controllers: [MatchController],
})
export class MatchModule {}
