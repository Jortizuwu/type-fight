import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './common/infrastructure/auth/auth.module';
import { DB_CONFIG } from './common/infrastructure/config/db-config';
import { Module } from '@nestjs/common';
import { MatchModule } from './match/match.module';
import { LoggerModule } from './common/infrastructure/logger/logger.module';
import { ExceptionsService } from './common/infrastructure/exceptions/exceptions.service';
import { ExceptionsModule } from './common/infrastructure/exceptions/exceptions.module';

@Module({
  imports: [
    DB_CONFIG(),
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MatchModule,
    LoggerModule,
    ExceptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ExceptionsService],
})
export class AppModule {}
