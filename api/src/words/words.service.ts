import {
  BadRequestException,
  HttpStatus,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import axios from 'axios';

import { WORDS_URL, DEFAULT_LIMIT } from './../constants';
import { Word } from './word.entity';
import { WordsRepository } from './words.repository';

@Injectable()
export class WordsService {
  private wordsUrl = WORDS_URL;

  constructor(private wordsRepository: WordsRepository) {}

  private async fetchWords(): Promise<string[]> {
    const { data, status } = await axios.get(this.wordsUrl);

    if (status !== HttpStatus.OK) {
      throw new BadRequestException();
    }

    const splitedWords = (data as string).split(/\r?\n/);

    return splitedWords;
  }

  async populate(): Promise<boolean> {
    const words = await this.fetchWords();

    if (!words) {
      throw new ServiceUnavailableException();
    }

    await this.wordsRepository.removeAll();

    const result = await this.wordsRepository.populate(words);

    return !!result.ok;
  }

  async searchTerms(
    terms: string[],
    limit: number = DEFAULT_LIMIT,
  ): Promise<Word[] | false> {
    const result = await this.wordsRepository.searchTerms(terms, limit);

    return result;
  }
}
