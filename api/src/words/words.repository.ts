import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { DEFAULT_LIMIT } from './../constants';
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

  async searchTerms(
    terms: string[],
    limit: number = DEFAULT_LIMIT,
  ): Promise<Word[] | false> {
    if (!terms || terms.length === 0) {
      return false;
    }

    const words = (await this.wordModel
      .find({
        term: { $in: terms.map((term) => new RegExp(term)) },
      })
      .limit(limit)) as Word[];

    return words;
  }
}
