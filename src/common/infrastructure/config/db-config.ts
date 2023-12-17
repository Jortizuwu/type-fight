import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const DB_CONFIG = () =>
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      url: configService.get('DATABASE_URL'),
      entities: [__dirname + './../../**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    inject: [ConfigService],
  });
