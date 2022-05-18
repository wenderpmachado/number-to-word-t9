import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WordDocument = Word & Document;

@Schema()
export class Word {
  @ApiProperty()
  @Prop({ required: true })
  term: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);
