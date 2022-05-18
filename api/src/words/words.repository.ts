import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Word, WordDocument } from './word.entity';

@Injectable()
export class WordsRepository {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async removeAll() {
    return this.wordModel.remove({});
  }

  async populate(terms: string[]) {
    const createdWords = terms.map((term) => new this.wordModel({ term }));
    return this.wordModel.bulkSave(createdWords);
  }
}
