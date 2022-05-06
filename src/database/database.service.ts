import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const database = [
  TypeOrmModule.forRootAsync({
    async useFactory() {
      return {
        ssl: false,
        type: 'postgres' as 'postgres',
        replication: {
          master: {
            host: 'localhost',
            username: 'postgres',
            password: 'admin',
            database: 'youtube',
          },
          slaves: [
            {
              host: 'localhost',
              username: 'postgres',
              password: 'admin',
              database: 'youtube',
            },
          ],
        },
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        synchronize: true,
      } as DataSourceOptions;
    },
  }),
];
