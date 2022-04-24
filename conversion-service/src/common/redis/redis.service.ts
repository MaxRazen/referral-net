import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { Config } from '../../config';

@Injectable()
export class RedisService {
  private client: Redis;

  constructor() {
    this.client = new Redis(Config.redis);
    this.client.addListener('error', this.errorListener);
  }

  private errorListener(error: Error) {
    console.error(error);
  }

  ping(): Promise<string> {
    return this.client.ping();
  }

  async getString(key: string) {
    return await this.client.get(key).catch(() => null);
  }

  async setString(key: string, expiredAt: number, value: any) {
    return await this.client
      .set(key, JSON.stringify(value), 'EX', expiredAt)
      .catch(() => false);
  }
}
