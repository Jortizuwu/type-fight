import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_CONFIG } from './common/infrastructure/config/db-config';
import { UserModule } from './user/user.module';

@Module({
  imports: [DB_CONFIG(), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
