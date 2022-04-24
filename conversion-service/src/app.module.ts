import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/database/database.module';
import { RedisService } from './common/redis/redis.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, RedisService],
})
export class AppModule {}
