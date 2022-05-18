import { Module } from '@nestjs/common';

import { NumberToWordController } from './number-to-word.controller';
import { WordsModule } from './../words/words.module';

@Module({
  imports: [WordsModule, WordsModule],
  controllers: [NumberToWordController],
})
export class NumberToWordModule {}
