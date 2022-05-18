import { ApiTags, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Param,
  BadRequestException,
  Query,
} from '@nestjs/common';

import { HintsDto } from './hints.dto';
import { DEFAULT_LIMIT } from './../constants';
import { WordsService } from '../words/words.service';
import { numberToWordConverter } from './helpers/number-to-word.converter';

@ApiTags('number-to-word')
@Controller('number-to-word')
export class NumberToWordController {
  constructor(private wordsService: WordsService) {}

  @Get(':sequence')
  @ApiParam({ name: 'sequence', required: true })
  @ApiQuery({ name: 'limit', required: false })
  @ApiResponse({
    status: 200,
    type: HintsDto,
    description: 'Return hints based on sequence',
  })
  @ApiResponse({
    status: 400,
    description: 'Error converting number to words  ',
  })
  async convert(
    @Param('sequence') sequence: string,
    @Query('limit') limit?: number,
  ) {
    const terms = numberToWordConverter(sequence);

    if (!terms) {
      throw new BadRequestException();
    }

    const wordsFound = this.wordsService.searchTerms(
      terms,
      limit || DEFAULT_LIMIT,
    );

    return wordsFound;
  }
}
