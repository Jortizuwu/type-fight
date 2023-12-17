import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './common/infrastructure/auth/auth.module';
import { DB_CONFIG } from './common/infrastructure/config/db-config';
import { MatchModule } from './match/match.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DB_CONFIG(),
    AuthModule,
    MatchModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
