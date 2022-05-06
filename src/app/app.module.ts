import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/modules/user/user.module';
import { VideoModule } from 'src/modules/video/video.module';

@Module({
  imports: [DatabaseModule, UserModule, VideoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
