import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConnectionUri } from 'src/shared/config/env.conf';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const DB_CONFIG = () =>
  TypeOrmModule.forRoot({
    type: 'postgres',
    url: postgresConnectionUri,
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],

    autoLoadEntities: true,
    synchronize: true,
  });
