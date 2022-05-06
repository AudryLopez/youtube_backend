import { database } from './database.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [...database],
  exports: [...database],
})
export class DatabaseModule {}
