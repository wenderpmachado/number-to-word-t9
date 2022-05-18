import { ApiProperty } from '@nestjs/swagger';

import { Word } from './../words/word.entity';
import { IAPIResponse } from './../@core/interfaces/api-response.interface';

export class HintsDto implements IAPIResponse<Word> {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  data?: Word;

  @ApiProperty()
  error?: any;

  @ApiProperty()
  message?: string;
}
