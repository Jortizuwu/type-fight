import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEnity } from 'src/common/domain/entities/history.entity';
import { HistoryController } from './infrastucture/historty.controller';
import { HistoryUseCaseService } from './application/use-case/history.use-case';
import { OrmHistoryRepository } from 'src/common/domain/repositories/orm/history/orm-history.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEnity])],
  providers: [HistoryController, HistoryUseCaseService, OrmHistoryRepository],
  controllers: [HistoryController],
})
export class HistoryModule {}
