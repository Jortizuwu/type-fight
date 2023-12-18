import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchGateway } from './match.gateway';
import { JwtModule } from 'src/common/infrastructure/jwt/jwt.module';

@Module({
  imports: [JwtModule],
  providers: [MatchGateway, MatchService],
})
export class MatchModule {}
