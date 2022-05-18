import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MongooseConfigService } from './@core/config/mongoose.config';
import { AppController } from './app.controller';
import { NumberToWordModule } from './number-to-word/number-to-word.module';
import { WordsModule } from './words/words.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
    WordsModule,
    NumberToWordModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
