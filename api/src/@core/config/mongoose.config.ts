import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const MONGO_URL = this.configService.get<string>('MONGO_URL');
    const MONGO_PORT = this.configService.get<string>('MONGO_PORT');

    return {
      uri: `mongodb://${MONGO_URL}:${MONGO_PORT}`,
    };
  }
}
