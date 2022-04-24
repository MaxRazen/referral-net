import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { RedisService } from './common/redis/redis.service';
import { Connection } from 'typeorm';
import { DATABASE_CONNECTION } from './constants';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly redisService: RedisService,
    @Inject(DATABASE_CONNECTION) private readonly connection: Connection,
  ) {}

  @Get('ping')
  ping() {
    return this.appService.ping();
  }

  @Get('redis')
  pingRedis() {
    return this.redisService.ping();
  }

  @Get('database')
  pingDatabase() {
    return {
      isConnected: this.connection.isConnected,
    };
  }
}
