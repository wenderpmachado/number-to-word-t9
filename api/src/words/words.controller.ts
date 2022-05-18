import { ConfigService } from '@nestjs/config';
import { Controller, Param, Post, ForbiddenException } from '@nestjs/common';

import { WordsService } from './words.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('words')
@Controller('words')
export class WordsController {
  private populateCode: string;

  constructor(
    private wordsService: WordsService,
    private configService: ConfigService,
  ) {
    this.populateCode =
      this.configService.get<string>('POPULATE_CODE') || '12345';
  }

  @Post('populate/:code')
  @ApiResponse({
    status: 200,
    description: 'The words has been successfully processed and stored.',
  })
  @ApiResponse({ status: 403, description: 'Invalid populate code' })
  populate(@Param('code') code: string) {
    if (code !== this.populateCode) {
      throw new ForbiddenException();
    }

    return this.wordsService.populate();
  }
}
