import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WordsRepository } from './words.repository';
import { Word, WordSchema } from './word.entity';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Word.name, schema: WordSchema }]),
  ],
  controllers: [WordsController],
  providers: [WordsService, WordsRepository],
  exports: [WordsService],
})
export class WordsModule {}
