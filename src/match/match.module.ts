import { Module } from '@nestjs/common';

import { JwtModule } from 'src/common/infrastructure/jwt/jwt.module';
import { MatchGateway } from './infrastructure/match.gateway';
import { MatchUsesCaseService } from './application/use-case/match.use-cases';
import { LoggerModule } from 'src/common/infrastructure/logger/logger.module';
import { MatchRepository } from './domain/repository/match.respository';
import { OrmMatchRepository } from 'src/common/domain/repositories/orm/match/orm-match.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [JwtModule, LoggerModule, UserModule],
  providers: [
    MatchGateway,
    MatchUsesCaseService,
    MatchRepository,
    OrmMatchRepository,
  ],
})
export class MatchModule {}
